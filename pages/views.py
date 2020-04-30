from django.shortcuts import render, redirect,reverse, get_object_or_404
from django.contrib.auth.models import User


from .models import House



def index(request):
    houses = House.objects.all()
    for house in houses:
        print(house.id)
        print(house.photo_main.url)
    count = House.objects.all().count()
    context = {
        'houses':houses,
        'count':count
        }
    return render(request, 'index.html', context)




def about(request):
    return render(request, 'about.html')



def contact_us(request):
    return render(request, 'contact.html')




def detail(request, pk):
    house = get_object_or_404(House, pk=pk)
    print(house.type_of_property)
    user = house.user
    house_type = ""
    if house.type_of_property == "HO":
        house_type = "خانه"
    elif house.type_of_property == "VI":
        house_type = "ویلا"
    elif house.type_of_property == "SH":
        house_type = "مغازه"
    elif house.type_of_property == "AP":
        house_type = "آپارتمان"
    elif house.type_of_property == "OF":
        house_type = "دفترکار"

    context = {
        'user':user,
        'house':house,
        'house_type':house_type,

    }
    return render(request, 'details.html', context)




def properties(request):
    return render(request, 'properties.html')





def pricing(request):
    return render(request, 'pricing.html')
