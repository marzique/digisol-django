from django.contrib import admin
from django.urls import include, path

from django.conf import settings # new
from django.conf.urls.static import static # new

urlpatterns = [
	path('', include('content.urls')),
    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# handler404 = 'content.views.handler404'