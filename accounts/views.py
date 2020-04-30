from django.shortcuts import render, redirect, get_object_or_404, reverse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib import messages, auth
from django.contrib.auth.models import User


from pages.models import House


def edit(request, house_id):
    house = House.objects.get(id=house_id)
    context={
        'house':house,
        'house_id':house_id
    }
    return render(request, 'accounts/edit.html', context)


def delete(request, house_id):
    house = House.objects.get(id=house_id)
    user = house.user
    house.delete()
    return redirect('my_properties', pk=user.pk)



def profile(request, pk):
    user = User.objects.get(pk=pk)
    houses = user.house_set.all()
    count = houses.count()
    context ={
        'user':user,
        'houses':houses,
        'count':count
    }
    return render(request, 'accounts/profile.html', context)


def my_properties(request, pk):
    user = User.objects.get(pk=pk)
    houses = user.house_set.all()
    count = houses.count()
    p = Paginator(houses, 2)
    page = request.GET.get('page', 1)

    try:
        houses = p.page(page)
    except PageNotAnInteger:
        houses =p.page(1)
    except EmptyPage:
        houses = p.page(p.num_pages)

    context ={
        'user':user,
        'houses':houses,
        'count':count,
        'p': p,
    }

    return render(request, 'accounts/my-properties.html', context)



def submit_house(request):
    print(request.user)
    if request.user.is_anonymous:
        messages.add_message(request, messages.INFO,
                             'جهت ثبت ملک لطفاّ ابتدا وارد سایت شوید.')
        return redirect('login')
    return render(request, 'accounts/submit-property.html')


def signup(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(username=username).exists():
                messages.error(request, 'نام کاربری قبلا استفاده شده است')
                return redirect('signup')
            else:
                if User.objects.filter(email=email).exists():
                    messages.error(request, 'ایمیل قبلا استفاده شده است')
                    return redirect('signup')
                else:
                    #Looks good
                    user = User.objects.create_user(username=username, password=password, email=email,
                    first_name=first_name, last_name=last_name)
                    auth.login(request, user)
                    user.save()
                    messages.success(request, 'ثبت نام شما با موفقیت انجام شد')
                    return redirect('login')

        else:
            messages.error(request, 'رمزهای وارد شده یکسان نیستند')
            return redirect('signup')
    else:
        return render(request, 'accounts/signup.html')


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            messages.success(request, 'ورود شما با موفقیت انجام شد')
            return redirect('index')
        else:
            messages.error(request, 'نام کاربری یا رمز عبور اشتباه است')
            return redirect('login')
    else:
        return render(request, 'accounts/login.html')


def logout(request):
    auth.logout(request)
    messages.success(request, 'خروج شما با موفقیت انجام شد')
    return redirect('index')
