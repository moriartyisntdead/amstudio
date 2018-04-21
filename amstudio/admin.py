from django.contrib import admin
from .models import Project, Technology

to_register = [Project, Technology]

admin.site.register(to_register)