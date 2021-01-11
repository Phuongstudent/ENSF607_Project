from django.shortcuts import render
from rest_framework import viewsets

from .serializers import CalendarInformationSerializer
from .models import CalendarInformation

from .serializers import LearningOutcomesSerializer
from .models import LearningOutcomes

from .serializers import FinalGradeDeterminationSerializer
from .models import FinalGradeDetermination

class CalendarInformationViewSet(viewsets.ModelViewSet):
    queryset = CalendarInformation.objects.all()
    serializer_class = CalendarInformationSerializer

class LearningOutcomesViewSet(viewsets.ModelViewSet):
    queryset = LearningOutcomes.objects.all()
    serializer_class = LearningOutcomesSerializer

class FinalGradeDeterminationViewSet(viewsets.ModelViewSet):
    queryset = FinalGradeDetermination.objects.all()
    serializer_class = FinalGradeDeterminationSerializer