# Generated by Django 3.0.6 on 2020-06-02 23:57

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0002_userrequest'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUsText',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='О Нас', max_length=60)),
                ('title_ua', models.CharField(default='Про Нас', max_length=60)),
                ('title_ru', models.CharField(default='Про Нас', max_length=60)),
                ('text', ckeditor.fields.RichTextField()),
                ('text_ua', ckeditor.fields.RichTextField()),
                ('text_ru', ckeditor.fields.RichTextField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]