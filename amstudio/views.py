from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView, FormView

from amstudio.forms import ContactForm
from .models import Technology, Project


NotImplementedResp = '<div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Courier New,monospace;">' \
                        '<h3>Not implemented yet</h3>' \
                     '</div>'


class IndexView(FormView):
    template_name = 'index.html'
    form_class = ContactForm
    success_url = '.'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['recent_projects'] = Project.objects.all()[:5]
        context['technologies'] = Technology.objects.all()
        return context

    def form_valid(self, form):
        name = form.cleaned_data['name']
        phone = form.cleaned_data['phone']
        email = form.cleaned_data['email']
        message = form.cleaned_data['message']
        form.proceed_request(name, phone, email, message)
        return super().form_valid(form)


def AboutView(request):
    return HttpResponse(NotImplementedResp)


def ServicesView(request):
    return HttpResponse(NotImplementedResp)


def ProjectsView(request):
    return HttpResponse(NotImplementedResp)


def ContactsView(request):
    return HttpResponse(NotImplementedResp)
