from django.urls import path


from . import views

#app_name = "accounts"
urlpatterns = [

    path('<int:house_id>/edit/', views.edit, name='edit'),
    path('<int:house_id>/delete/', views.delete, name='delete'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('submit/', views.submit_house, name='submit_house'),
    path('<int:pk>/profile', views.profile, name='profile'),
    path('<int:pk>/my-properties/', views.my_properties, name='my_properties'),

]
