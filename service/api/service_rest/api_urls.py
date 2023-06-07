from django.urls import path

from .views import (
    api_list_technicians,
    api_delete_technician,
    api_list_appointments,
    api_delete_appointment,
    api_cancel_appointment,
    api_finished_appointment,
)

urlpatterns = [
    path(
        "appointments/<int:pk>/finish",
        api_finished_appointment,
        name="api_finished_appointment",
    ),
    path(
        "appointments/<int:pk>/cancel",
        api_cancel_appointment,
        name="api_cancel_appointment",
    ),
    path(
        "appointments/<int:pk>/",
        api_delete_appointment,
        name="api_delete_appointment",
    ),
    path("appointments/", api_list_appointments, name=" api_list_appointments"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<pk>/", api_delete_technician, name="api_delete_technician"),
]
