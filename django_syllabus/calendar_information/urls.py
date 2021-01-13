from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'calendar', views.CalendarInformationViewSet)
router.register(r'learning', views.LearningOutcomesViewSet)
router.register(r'grades', views.FinalGradeDeterminationViewSet)
router.register(r'syllabustable', views.SyllabusTableViewSet)

urlpatterns = [
    path('api/', include(router.urls))
]