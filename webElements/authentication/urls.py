from django.urls import path
from .views import (
    signlogA
)

urlpatterns = [
    path("", signlogA, name='a'),
]