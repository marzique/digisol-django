from django.contrib import admin
from content.models import SliderPageText, UserRequest

@admin.register(SliderPageText)
class SliderPageText(admin.ModelAdmin):

    list_display = ('id', 'copyright')
    
@admin.register(UserRequest)
class UserRequest(admin.ModelAdmin):
    list_display = ('email', 'date', 'name', 'message')
    