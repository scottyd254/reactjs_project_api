from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Job(models.Model):
    title = models.CharField(max_length=100)
    type = models.CharField(max_length=20)
    description = models.TextField(max_length=500)
    location = models.CharField(max_length=50)
    salary = models.CharField(max_length=50)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='jobs')
    

    def __str__(self):
        return self.title

    

        


