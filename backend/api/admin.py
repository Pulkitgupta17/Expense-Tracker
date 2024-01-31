from django.contrib import admin
from .models import ExpenseModel, CategoryModel

admin.site.register(ExpenseModel)
admin.site.register(CategoryModel)