from django.shortcuts import render
from .models import WCUClasses, Subjects, Languages

def index(request):
	return render(request, 'portfolio/home.html')

def education(request):
	classes = WCUClasses.objects.all()
	subjects = Subjects.objects.all()
	languages = Languages.objects.all()
	return render(request, 'portfolio/education.html', context={"classes": classes, "subjects": subjects, "languages": languages})

def jobs(request):
	return render(request, 'portfolio/jobs.html')

def projects(request):
	return render(request, 'portfolio/projects.html')