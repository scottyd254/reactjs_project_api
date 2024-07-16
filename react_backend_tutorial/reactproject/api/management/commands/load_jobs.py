import json
from django.core.management.base import BaseCommand
from api.models import Job, Company

class Command(BaseCommand):
    help = 'Load job data from JSON file'

    def handle(self, *args, **kwargs):
        with open('jobs.json') as f:
            data = json.load(f)

        for job_data in data['jobs']:
            company_data = job_data.pop('company')
            company, created = Company.objects.get_or_create(
                name=company_data['name'],
                defaults={
                    'description': company_data['description'],
                    'email': company_data['contactEmail'],
                    'phone': company_data['contactPhone']
                }
            )
            Job.objects.create(company=company, **job_data)
        self.stdout.write(self.style.SUCCESS('Data loaded successfully'))
