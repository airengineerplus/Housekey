from django.db import models
from django.utils import timezone
from extensions.utils import jalali_converter
from django.contrib.auth.models import User



class House(models.Model):

    HOME = 'HO'
    APARTMENT = 'AP'
    OFFICE = 'OF'
    SALE = 'SA'
    RENT = 'RE'

    TYPE_OF_PROPERTY = [
    ('HO', 'خانه'),
    ('VI', 'ویلا'),
    ('SH', 'مغازه'),
    ('AP', 'آپارتمان'),
    ('OF', 'دفترکار'),
    ]

    PROPERTY_IS_FOR = [
    ('SA', 'برای فروش'),
    ('RE', 'برای اجاره')
    ]


    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name = "نام کاربر")
    title = models.CharField(max_length=200, verbose_name = "عنوان")
    type_of_property = models.CharField(max_length=2,choices=TYPE_OF_PROPERTY,default=HOME, verbose_name = "نوع ملک")
    is_for = models.CharField(max_length=2,choices=PROPERTY_IS_FOR,default=SALE, verbose_name = "نوع آگهی")
    address = models.CharField(max_length=200, verbose_name = "آدرس")
    city = models.CharField(max_length=100, verbose_name = "شهر")
    state = models.CharField(max_length=100, blank=True, verbose_name = "استان")
    description = models.TextField(blank=True, verbose_name = "توضیحات")
    price = models.IntegerField(default=4500000, verbose_name = "قیمت")
    bedrooms = models.IntegerField(default=3, verbose_name = "تعداد اتاق")
    bathrooms = models.IntegerField(default=1, verbose_name = "تعداد اتاق خواب")
    garage = models.IntegerField(default=1, verbose_name = "پارکینگ")
    area = models.IntegerField(default=350, verbose_name = "متراژ")
    year_of_built = models.IntegerField(default=1395, verbose_name = "سال ساخت")
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/', verbose_name = "عکس")
    is_published = models.BooleanField(default=True, verbose_name = "آیا منتشر شود؟")
    publish = models.DateTimeField(default=timezone.now, verbose_name = "زمان انتشار")


    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        self.photo_main.delete()
        super().delete(*args, **kwargs)

    def jpublish(self):
        return jalali_converter(self.publish)
