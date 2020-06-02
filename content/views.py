from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.core.mail import EmailMessage
from content.models import SliderPageText



def main_page(request, lang='ru'):
    context = {}
    context['slider'] = SliderPageText.objects.first()
    if lang not in ['ru', 'ua', 'en']:
        raise Http404("Page doesn't exist")
    context['lang'] = lang

    return render(request, 'content/main.html', context)
