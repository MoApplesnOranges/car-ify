from django.shortcuts import render
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.http import require_http_methods
import json
from django.db.models import ProtectedError
from common.json import ModelEncoder
from .models import AutomobileVO, Sale, Salesperson, Customer

# Create your views here.


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "sold",
    ]


class SalesPersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]


class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "salesperson",
        "customer",
        "automobile",
        "id",
    ]

    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalesPersonListEncoder(),
        "customer": CustomerListEncoder(),
    }

    def get_extra_data(self, o):
        return {
            "vin": o.automobile.vin,
            "price": float(o.price),
        }


@require_http_methods(["GET"])
def api_unsold_automobiles(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.filter(sold=False)
        return JsonResponse(
            {"autos": autos},
            encoder=AutomobileVODetailEncoder,
        )


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalesPersonListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonListEncoder,
                safe=False,
            )
        except Exception as e:
            response = JsonResponse(
                {"message": "Couldn't create the salesperson", "error": str(e)}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_delete_salesperson(request, pk):
    try:
        salesperson = Salesperson.objects.get(id=pk)
        salesperson.delete()
        return JsonResponse({"deleted": True})
    except Salesperson.DoesNotExist:
        return JsonResponse({"error": "Salesperson not found"}, status=404)


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerListEncoder,
                safe=False,
            )
        except Exception as e:
            response = JsonResponse(
                {"message": "Couldn't create the customer", "error": str(e)}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_delete_customer(request, pk):
    try:
        customer = Customer.objects.get(id=pk)
        customer.delete()
        return JsonResponse({"deleted": True})
    except Customer.DoesNotExist:
        return JsonResponse({"error": "Customer not found"}, status=404)


@require_http_methods(["GET", "POST"])
def api_list_sales(request, automobile_vo_id=None):
    if request.method == "GET":
        if automobile_vo_id is not None:
            sales = Sale.objects.filter(automobiles=automobile_vo_id)
        else:
            sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_vin = content.get("vin")
            automobile = AutomobileVO.objects.get(vin=automobile_vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile id"},
                status=400,
            )

        try:
            salesperson_id = content["salesperson"]
            salesperson = Salesperson.objects.get(id=salesperson_id)
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson id"},
                status=400,
            )

        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson id"},
                status=400,
            )

        price = content.get("price")

        try:
            sale = Sale.objects.create(
                automobile=automobile,
                salesperson=salesperson,
                customer=customer,
                price=price,
            )

            automobile.sold = True
            automobile.save()

            return JsonResponse(
                sale,
                encoder=SaleListEncoder,
                safe=False,
            )
        except Exception as e:
            response = JsonResponse(
                {"message": "Couldn't create the sale", "error": str(e)}
            )
        response.status_code = 400
        return response


@require_http_methods(["DELETE"])
def api_delete_sale(request, pk):
    try:
        sale = Sale.objects.get(id=pk)
        print(f"Deleting sale with ID: {pk}")
        sale.delete()
        return JsonResponse({"deleted": True})
    except Sale.DoesNotExist:
        print(f"Sale with ID: {pk} not found")
        return JsonResponse({"error": "Sale not found"}, status=404)
    except ProtectedError as pe:
        print(f"ProtectedError occurred: {str(pe)}")
        return JsonResponse(
            {"error": "Sale deletion failed due to ProtectedError"}, status=400
        )
