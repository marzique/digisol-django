# Generated by Django 3.0.7 on 2020-06-03 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0004_auto_20200603_2156'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClientImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='clients/')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]