from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from django.core.mail import EmailMessage
from django.views.decorators.csrf import csrf_exempt
from content.models import SliderPageText



def main_page(request, lang='ru'):
    context = {}
    context['slider'] = SliderPageText.objects.first()
    if lang not in ['ru', 'ua', 'en']:
        raise Http404("Page doesn't exist")
    context['lang'] = lang

    return render(request, 'content/main.html', context)


@csrf_exempt
def form_submit(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        brief = request.FILES['brif']
        
        return JsonResponse({'message': 'noice'})
