from django.db import models

class Echo(models.Model):
    message = models.CharField(max_length = 100)

    def __str__(self):
        return 'message: ' + self.message

