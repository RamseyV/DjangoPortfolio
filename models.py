from django.db import models


# class Subjects(models.Model):
#     subject = models.CharField(max_length=200)
#     def __str__(self):
#         return self.subject

# class Languages(models.Model):
#     language = models.CharField(max_length=200)

#     def __str__(self):
#         return self.language


# class WCUClasses(models.Model):
#     name = models.CharField(max_length=200)
#     description = models.CharField(max_length=200)
#     subject = models.ForeignKey(Subjects, blank=True, null=True, on_delete=models.SET_NULL)
#     languages = models.ManyToManyField(Languages, blank=True)

#     def __str__(self):
#         return self.name



# class SkillPlanets(models.Model):
#     skill = models.CharField(max_length=200)
#     description = models.TextField()

#     def __str__(self):
#         return self.skill
        