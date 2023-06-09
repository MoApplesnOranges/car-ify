from django.db import models


# Create your models here.
class Technician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.first_name + " " + self.last_name


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=150, unique=True)
    sold = models.BooleanField(default=False)


class Status(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=10, null=True, primary_key=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("id",)
        verbose_name_plural = "statuses"


class Appointment(models.Model):
    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="CREATED")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment

    date_time = models.DateTimeField()
    reason = models.CharField(max_length=250)
    status = models.ForeignKey(
        Status, null=True, related_name="appointments", on_delete=models.PROTECT
    )
    vin = models.CharField(max_length=200)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician, related_name="appointment", on_delete=models.CASCADE
    )

    def canceled(self):
        status = Status.objects.get(name="CANCELED")
        self.status = status
        self.save()

    def finished(self):
        status = Status.objects.get(name="FINISHED")
        self.status = status
        self.save()

    # def get_api_url(self):
    #     return reverse("api_show_presentation", kwargs={"pk": self.pk})

    def __str__(self):
        return self.reason
