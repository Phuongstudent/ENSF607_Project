from django.contrib import admin

from .models import CalendarInformation
from .models import LearningOutcomes
from .models import FinalGradeDetermination

admin.site.register(CalendarInformation)
admin.site.register(LearningOutcomes)
admin.site.register(FinalGradeDetermination)


