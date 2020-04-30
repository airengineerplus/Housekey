# Generated by Django 3.0.5 on 2020-04-13 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_auto_20200413_1538'),
    ]

    operations = [
        migrations.AlterField(
            model_name='house',
            name='is_for',
            field=models.CharField(choices=[('SA', 'برای فروش'), ('RE', 'برای اجاره')], default='SA', max_length=2, verbose_name='نوع آگهی'),
        ),
    ]