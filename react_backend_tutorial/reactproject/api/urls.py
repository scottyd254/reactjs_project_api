from django.urls import path
from .views import JobsListSerializerView, JobSerializerView, JobCreateSerializerView, JobUpdatePatchSerializerView, JobDestroySerializerView


urlpatterns = [
    path('api/get/jobs', JobsListSerializerView.as_view(), name='get-jobs'),
    path('api/get/job/<int:id>', JobSerializerView.as_view(), name='get-job'),
    path('api/create_job', JobCreateSerializerView.as_view(), name='create-job'),
    path('api/job/update/<int:id>', JobUpdatePatchSerializerView.as_view(), name='update-job'),
    path('api/job/delete/<int:id>', JobDestroySerializerView.as_view(), name='delete-job')
]