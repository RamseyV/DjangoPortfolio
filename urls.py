from django.urls import path, include
from . import views

app_name = "portfolio"

urlpatterns = [
    path('', views.index, name='index'),
    path('experience/', views.education, name='experience'),
    path('projects/', views.projects, name='projects'),
    path('PileItUp/', views.PileItUp, name='PileItUp'),
    path('MissionDemolition/', views.MissionDemolition, name='MissionDemolition'),
    path('ApplePicker/', views.ApplePicker, name='ApplePicker'),
    path('Labyrinth/', views.Labyrinth, name='Labyrinth'),
]

