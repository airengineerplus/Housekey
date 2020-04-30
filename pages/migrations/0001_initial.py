# Generated by Django 3.0.5 on 2020-04-13 09:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='House',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('type_of_property', models.CharField(choices=[('HO', 'خانه'), ('VI', 'ویلا'), ('SH', 'مغازه'), ('AP', 'آپارتمان'), ('OF', 'دفترکار')], default='HO', max_length=2)),
                ('is_for', models.CharField(choices=[('SA', 'برای فروش'), ('RE', 'برای اجاره')], default='SA', max_length=2)),
                ('address', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(blank=True, max_length=100)),
                ('description', models.TextField(blank=True)),
                ('price', models.IntegerField(default=4500000)),
                ('bedrooms', models.IntegerField(default=3)),
                ('bathrooms', models.IntegerField(default=1)),
                ('garage', models.IntegerField(default=1)),
                ('area', models.IntegerField(default=350)),
                ('year_of_built', models.IntegerField(default=1395)),
                ('photo_main', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('is_published', models.BooleanField(default=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]