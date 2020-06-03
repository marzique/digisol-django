from django.contrib import admin
from content.models import SliderPageText, UserRequest, AboutUsText, ClientImage


@admin.register(SliderPageText)
class SliderPageText(admin.ModelAdmin):

    list_display = ('id', 'copyright')
    
@admin.register(UserRequest)
class UserRequest(admin.ModelAdmin):
    list_display = ('email', 'date', 'name', 'message')
    

@admin.register(AboutUsText)
class AboutUsText(admin.ModelAdmin):
    list_display = ('title', 'text')



@admin.register(ClientImage)
class ClientImage(admin.ModelAdmin):
    list_display = ('id', 'name')

    def name(self, obj):
        return obj.__str__()