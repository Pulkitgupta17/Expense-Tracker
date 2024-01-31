from rest_framework import serializers
from .models import ExpenseModel
from .models import CategoryModel

class ExpenseModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseModel
        fields = '__all__'

class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = '__all__'