# Generated by Django 3.0.6 on 2020-05-29 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SliderPageText',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('copyright', models.CharField(default='© Digisol Agency, All rights reserved.', max_length=60)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]