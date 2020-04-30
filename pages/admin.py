from django.contrib import admin

from .models import  House

class HouseAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_published', 'price',)
    list_display_links = ('id', 'title')
    list_editable = ('is_published',)
    search_fields = ('title', 'address', 'city', 'state', )
    list_per_page = 25


admin.site.register(House, HouseAdmin)
