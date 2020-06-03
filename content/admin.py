from django.contrib import admin
from content.models import SliderPageText, UserRequest, AboutUsText


@admin.register(SliderPageText)
class SliderPageText(admin.ModelAdmin):

    list_display = ('id', 'copyright')
    
@admin.register(UserRequest)
class UserRequest(admin.ModelAdmin):
    list_display = ('email', 'date', 'name', 'message')
    

@admin.register(AboutUsText)
class AboutUsText(admin.ModelAdmin):
    list_display = ('title', 'title_ua', 'title_ru', 'text')

