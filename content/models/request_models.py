from django.db import models


class UserRequest(models.Model):
    name = models.CharField(max_length=300)
    email = models.CharField(max_length=100)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    # brief = 

    def __str__(self):
        return self.email + self.message[:20]
