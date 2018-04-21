from django.http import HttpResponse
from django.shortcuts import render
from amstudio.views import NotImplementedResp


# Create your views here.
def IndexView(request):
    return HttpResponse(NotImplementedResp)
