from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import EmailMessage

from content.models import SliderPageText



def main_page(request):
    context = {}
    context['slider'] = SliderPageText.objects.first()

    return render(request, 'content/main.html', context)
