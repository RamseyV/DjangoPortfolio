from django.shortcuts import render
# from .models import WCUClasses, Subjects, Languages

def index(request):
	return render(request, 'portfolio/home.html')

def education(request):
	return render(request, 'portfolio/education.html')

def jobs(request):
	return render(request, 'portfolio/jobs.html')

def projects(request):
	return render(request, 'portfolio/projects.html') 


def PileItUp(request):
	return render(request, 'portfolio/PileItUp.html') 


def MissionDemolition(request):
	return render(request, 'portfolio/MissionDemolition.html') 

def ApplePicker(request):
	return render(request, 'portfolio/ApplePicker.html') 

def Labyrinth(request):
	return render(request, 'portfolio/Labyrinth.html') 

