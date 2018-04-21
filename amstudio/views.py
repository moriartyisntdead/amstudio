from django.http import HttpResponse
from django.views.generic import TemplateView
from .models import Technology, Project


NotImplementedResp = '<div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Courier New,monospace;">' \
                    '<h3>Not implemented yet</h3>' \
                 '</div>'


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['recent_projects'] = Project.objects.all()[:5]
        context['technologies'] = Technology.objects.all()
        return context


def AboutView(request):
    return HttpResponse(NotImplementedResp)


def ServicesView(request):
    return HttpResponse(NotImplementedResp)


def ProjectsView(request):
    return HttpResponse(NotImplementedResp)


def ContactsView(request):
    return HttpResponse(NotImplementedResp)
