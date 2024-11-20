from django.urls import path
from .views import (
    homepage, about
)

urlpatterns = [
    path("", homepage, name='homepage'),
    path("about/", about, name='about')
]