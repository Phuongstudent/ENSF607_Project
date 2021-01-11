from django.db import models

class CalendarInformation(models.Model):
    course_code = models.CharField(max_length = 50)
    course_title = models.CharField(max_length = 50)
    course_description = models.TextField()
    course_hours = models.CharField(max_length = 50)
    course_credit = models.CharField(max_length = 10)
    course_reference = models.URLField(max_length = 200)

class LearningOutcomes(models.Model):
    learning_outcomes = models.TextField()

    content_math = models.CharField(max_length = 50)
    content_naturalscience = models.CharField(max_length = 50)
    content_complementarystudies = models.CharField(max_length = 50)
    content_engineeringscience = models.CharField(max_length = 50)
    content_engineeringdesign = models.CharField(max_length = 50)

    section_lecture = models.CharField(max_length = 50)
    section_tutorial = models.CharField(max_length = 50)
    section_lab = models.CharField(max_length = 50)

    lab_type = models.CharField(max_length = 10)
    lab_number = models.CharField(max_length = 10)
    lab_safetytaught = models.CharField(max_length = 10)
    lab_safetyexaminer = models.CharField(max_length = 10)

class FinalGradeDetermination(models.Model):
    grade_components = models.TextField()

    grade_notes = models.TextField()

    grade_marks = models.TextField()




