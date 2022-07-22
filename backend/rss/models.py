from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractUser

# Create your models here.
class BaseModel(models.Model):
    _created = models.DateTimeField(default=timezone.now)
    _modified = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True


class User(AbstractUser):
    pass


class Album(BaseModel):
    rank = models.IntegerField(null=False)
    title = models.CharField(max_length=200, null=False, blank=False)
    artist = models.CharField(max_length=200, null=False, blank=False)
    year = models.IntegerField(null=False)
    label = models.CharField(max_length=200, null=False, blank=False)
    description = models.TextField(max_length=2000, null=False, blank=False)
    art_url = models.CharField(max_length=200, null=False, blank=False)
