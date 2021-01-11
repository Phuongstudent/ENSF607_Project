from rest_framework import serializers
from .models import CalendarInformation
from .models import LearningOutcomes
from .models import FinalGradeDetermination


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


