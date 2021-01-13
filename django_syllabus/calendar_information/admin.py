from django.contrib import admin

from .models import CalendarInformation
from .models import LearningOutcomes
from .models import FinalGradeDetermination
from .models import SyllabusTable

admin.site.register(CalendarInformation)
admin.site.register(LearningOutcomes)
admin.site.register(FinalGradeDetermination)
admin.site.register(SyllabusTable)



