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
    text = RichTextField()
    text_ua = RichTextField()
    text_ru = RichTextField()

# class SliderProject(models.Model):
#     background = models.ImageField(default='#', upload_to='#')
#     slider = models.ForeignKey(SliderPageText, on_delete=models.CASCADE)
