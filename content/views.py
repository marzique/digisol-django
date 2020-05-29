from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import EmailMessage
# from .models import *
import random
import json


def main_page(request):
    context = {}
    return render(request, 'content/main.html', context)
