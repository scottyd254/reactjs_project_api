from django.shortcuts import render
from .serializers import JobSerializer
from .models import Job
from rest_framework import generics

# Create your views here.
#get - ListApiView - /api/get/jobs
#get - RetriveApiView - /api/get/job/<int:id>
#get & post - ListCreateApiView - /api/create_job
#patch / put - updateapiview /api/job/update/<int:id>
# delete - destroyapiview /api/job/delete/<int:id>

class JobsListSerializerView(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobSerializerView(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    lookup_field = 'id'

class JobCreateSerializerView(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobUpdatePatchSerializerView(generics.RetrieveUpdateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    lookup_field = 'id'

class JobDestroySerializerView(generics.RetrieveDestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    lookup_field = 'id'
