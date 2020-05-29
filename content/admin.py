from django.contrib import admin
from content.models import SliderPageText

@admin.register(SliderPageText)
class SliderPageText(admin.ModelAdmin):

    list_display = ('id', 'copyright')
    