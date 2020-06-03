from django.db import models
from ckeditor.fields import RichTextField


class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.pk = 1
        super(SingletonModel, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj


class SliderPageText(SingletonModel):
    copyright = models.CharField(max_length=60, default='© Digisol Agency, All rights reserved.')


class AboutUsText(SingletonModel):
    title = models.CharField(max_length=60, default='О Нас')
    title_ua = models.CharField(max_length=60, default='Про Нас')
    title_ru = models.CharField(max_length=60, default='Про Нас')
    text = RichTextField(default='')
    text_ua = RichTextField(default='')
    text_ru = RichTextField(default='')
    subtitle = models.CharField(max_length=60, default='Need an agile team?')
    subtitle_ua = models.CharField(max_length=60, default='Потрібна креативна команда?')
    subtitle_ru = models.CharField(max_length=60, default='Нужна креативная команда?')
    subtext = models.TextField(default='')
    subtext_ua = models.TextField(default='')
    subtext_ru = models.TextField(default='')
    button = models.CharField(max_length=60, default='What do we do? ')
    button_ua  = models.CharField(max_length=60, default='Чим ми займаємося?')
    button_ru = models.CharField(max_length=60, default='Чем мы занимаемся?')
    # steps
    step1_title = models.CharField(max_length=60, default='')
    step1_title_ua = models.CharField(max_length=60, default='')
    step1_title_ru = models.CharField(max_length=60, default='')
    step1_text = models.TextField(default='')
    step1_text_ua = models.TextField(default='')
    step1_text_ru = models.TextField(default='')

    step2_title = models.CharField(max_length=60, default='')
    step2_title_ua = models.CharField(max_length=60, default='')
    step2_title_ru = models.CharField(max_length=60, default='')
    step2_text = models.TextField(default='')
    step2_text_ua = models.TextField(default='')
    step2_text_ru = models.TextField(default='')

    step3_title = models.CharField(max_length=60, default='')
    step3_title_ua = models.CharField(max_length=60, default='')
    step3_title_ru = models.CharField(max_length=60, default='')
    step3_text = models.TextField(default='')
    step3_text_ua = models.TextField(default='')
    step3_text_ru = models.TextField(default='')

    step4_title = models.CharField(max_length=60, default='')
    step4_title_ua = models.CharField(max_length=60, default='')
    step4_title_ru = models.CharField(max_length=60, default='')
    step4_text = models.TextField(default='')
    step4_text_ua = models.TextField(default='')
    step4_text_ru = models.TextField(default='')


class ClientImage(models.Model):
    image = models.FileField(upload_to='clients/')

    def __str__(self):
        return self.image.url

    def save(self):
        """Limit maximum quantity of images to grid size (4x2)"""

        if not self.id and ClientImage.objects.count() > 7:
            return # 
        else:
            super().save()  #"real" save() method.

    @property
    def delay(self):
        index = ClientImage.objects.filter(id__lt = self.id).count()
        return 800 + 50 * index


# class SliderProject(models.Model):
#     background = models.ImageField(default='#', upload_to='#')
#     slider = models.ForeignKey(SliderPageText, on_delete=models.CASCADE)
