from django.urls import path


from . import views

#app_name = 'pages'

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact_us, name='contact'),
    path('house/<int:pk>/', views.detail, name='detail'),
    path('pricing/', views.pricing, name='pricing'),
    path('properties/', views.properties, name='properties'),

]
