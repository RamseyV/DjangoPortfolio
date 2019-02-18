from django.urls import path, include
from . import views

app_name = "portfolio"

urlpatterns = [
    path('', views.index, name='index'),
    path('experience/', views.education, name='experience'),
    path('projects/', views.projects, name='projects'),
]

