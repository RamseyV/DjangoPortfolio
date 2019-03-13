from django.contrib import admin
from .models import Subjects, Languages, WCUClasses

class WCUClassesAdmin(admin.ModelAdmin):
	 fieldsets = [
        ("Class Name", {'fields': ["name"]}),
        ("Description", {'fields': ["description"]}),
        ("Subject", {'fields': ["subject"]}),
        ("Languages", {"fields": ["languages"]})
    ]


admin.site.register(Subjects)
admin.site.register(Languages)
admin.site.register(WCUClasses,WCUClassesAdmin)
# admin.site.register(SkillPlanets)