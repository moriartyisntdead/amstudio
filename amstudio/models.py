from django.db import models


class Technology(models.Model):
    name = models.CharField(max_length=50)
    icon = models.ImageField(upload_to='tech_images')

    class Meta:
        verbose_name_plural = 'Technologies'

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=75)
    customer = models.CharField(max_length=50)
    link = models.CharField(max_length=75)
    image = models.ImageField(upload_to='proj_images')
    description = models.TextField()

    def __str__(self):
        return self.name
