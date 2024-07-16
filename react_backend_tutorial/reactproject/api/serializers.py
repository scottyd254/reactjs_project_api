# serialize the models here 
from rest_framework import serializers
from .models import Job, Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Company
        fields = ['name', 'description', 'phone', 'email']

class JobSerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta: 
        model = Job
        fields = ['id', 'title','type', 'description', 'location' , 'salary', 'company']
    
    def create(self, validated_data):
        company_data = validated_data.pop('company')
        company, created = Company.objects.get_or_create(**company_data)
        job = Job.objects.create(company=company, **validated_data)
        return job

    def update(self, instance, validated_data):
        company_data = validated_data.pop('company')
        company = instance.company

        instance.title = validated_data.get('title', instance.title)
        instance.type = validated_data.get('type', instance.type)
        instance.description = validated_data.get('description', instance.description)
        instance.location = validated_data.get('location', instance.location)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.save()

        company.name = company_data.get('name', company.name)
        company.description = company_data.get('description', company.description)
        company.contact_email = company_data.get('email', company.email)
        company.contact_phone = company_data.get('phone', company.phone)
        company.save()

        return instance

        



