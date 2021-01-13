from rest_framework import serializers
from .models import CalendarInformation
from .models import LearningOutcomes
from .models import FinalGradeDetermination
from .models import SyllabusTable

class CalendarInformationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CalendarInformation
        fields = '__all__'

class LearningOutcomesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LearningOutcomes
        fields = '__all__'

class FinalGradeDeterminationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FinalGradeDetermination
        fields = '__all__'

class SyllabusTableSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SyllabusTable
        fields = '__all__'
