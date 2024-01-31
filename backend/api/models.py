from django.db import models
# Create your models here.

class ExpenseModel(models.Model):
    expense = models.CharField(max_length=100)
    category = models.CharField(max_length=256)
    date = models.DateField(max_length=500, default='none')
    amount = models.CharField(max_length=100, default='none')

    def __str__(self):
        return self.expense

class CategoryModel(models.Model):
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category