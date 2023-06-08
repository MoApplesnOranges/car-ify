from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Technician, AutomobileVO, Status, Appointment


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["employee_id", "first_name", "last_name"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer",
        "date_time",
        "reason",
        "id",
        "technician",
        "status",
    ]

    def get_extra_data(self, o):
        return {
            "technician": o.technician.first_name + " " + o.technician.last_name,
            "status": o.status.name,
        }


# class PostAppointmentEncoder(ModelEncoder):
#     model = Appointment
#     properties = [
#         "vin",
#         "customer",
#         "date_time",
#         "reason",
#         "id",
#         "technician"
#     ]


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    try:
        if request.method == "GET":
            technicians = Technician.objects.all()
            return JsonResponse({"Technicians": technicians}, encoder=TechnicianEncoder)
        else:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(technician, encoder=TechnicianEncoder, safe=False)
    except Technician.DoesNotExist:
        return JsonResponse({"message": "Invalid technician"}, status=400)


@require_http_methods(["DELETE"])
def api_delete_technician(request, pk):
    try:
        if request.method == "DELETE":
            count, _ = Technician.objects.filter(employee_id=pk).delete()
            return JsonResponse({"deleted": count > 0})
    except Technician.DoesNotExist:
        return JsonResponse({"message": "Invalid technician"}, status=400)


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse({"Appointments": appointments}, encoder=AppointmentEncoder)
    else:
        content = json.loads(request.body)
        try:
            # stat = content["status"]
            status = Status.objects.get(name="CREATED")
            content["status"] = status
        except Status.DoesNotExist:
            return JsonResponse({"message": "Invalid status name"}, status=400)
        try:
            tech = content["technician"]
            split = tech.split()
            first_name = split[0]
            last_name = split[1]
            technician = Technician.objects.get(
                first_name=first_name, last_name=last_name
            )
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Invalid technician name"}, status=400)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)


@require_http_methods(["DELETE"])
def api_delete_appointment(request, pk):
    try:
        if request.method == "DELETE":
            count, _ = Appointment.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
    except Appointment.DoesNotExist:
        return JsonResponse({"message": "Invalid appointment"}, status=400)


@require_http_methods(["PUT"])
def api_cancel_appointment(request, pk):
    appointment = Appointment.objects.get(id=pk)
    appointment.canceled()
    # body = {
    #     "presenter_name": presentation.presenter_name,
    #     "presenter_email": presentation.presenter_email,
    #     "title": presentation.title,
    # }
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )


@require_http_methods(["PUT"])
def api_finished_appointment(request, pk):
    appointment = Appointment.objects.get(id=pk)
    appointment.finished()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )
