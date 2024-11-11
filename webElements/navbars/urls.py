from django.urls import path
from .views import (
    navA
)

urlpatterns = [
    path("navbars", navA, name='nav'),
]