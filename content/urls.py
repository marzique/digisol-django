from django.urls import path
from . import views


urlpatterns = [
    path('', views.main_page, name='main-page'),
    path('form_submit/', views.form_submit, name='form_submit'),
    path('<str:lang>/', views.main_page, name='main-page'),
]