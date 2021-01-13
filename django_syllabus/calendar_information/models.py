from django.db import models

class SyllabusTable(models.Model):
    syllabus_name = models.CharField(max_length = 100, blank = False)
    syllabus_number = models.IntegerField()

class CalendarInformation(models.Model):
    course_code = models.CharField(max_length = 100, blank = True)
    course_title = models.CharField(max_length = 100, blank = True)
    course_description = models.TextField(blank = True)
    course_hours = models.CharField(max_length = 100, blank = True)
    course_credit = models.CharField(max_length = 100, blank = True)
    course_reference = models.CharField(max_length = 200, blank = True)

class LearningOutcomes(models.Model):
    learning_outcomes = models.TextField(blank = True)

    content_math = models.CharField(max_length = 100, blank = True)
    content_naturalscience = models.CharField(max_length = 100, blank = True)
    content_complementarystudies = models.CharField(max_length = 100, blank = True)
    content_engineeringscience = models.CharField(max_length = 100, blank = True)
    content_engineeringdesign = models.CharField(max_length = 100, blank = True)

    section_lecture = models.CharField(max_length = 100, blank = True)
    section_tutorial = models.CharField(max_length = 100, blank = True)
    section_lab = models.CharField(max_length = 100, blank = True)

    lab_type = models.CharField(max_length = 100, blank = True)
    lab_number = models.CharField(max_length = 100, blank = True)
    lab_safetytaught = models.CharField(max_length = 100, blank = True)
    lab_safetyexaminer = models.CharField(max_length = 100, blank = True)

class FinalGradeDetermination(models.Model):
    grade_components = models.TextField(blank = True)

    grade_notes = models.TextField(blank = True)

    grade_marks = models.TextField(blank = True)




