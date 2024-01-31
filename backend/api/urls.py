# api/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('expenses/save/single', SaveExpense.as_view()),
    path('expenses/get/single', GetExpense.as_view()),
    path('expenses/view/all', ViewExpenses.as_view()),
    path('expenses/delete/single', DeleteExpense.as_view()),

    path('categories/save/single', SaveCategory.as_view()),
    path('categories/view/all', ViewCategories.as_view()),
    path('categories/delete/single', DeleteCategory.as_view()),

    path('visuals/get_monthly_spending_visuals/all', getMonthlySpendingVisuals.as_view()),
    path('visuals/get_weekly_spending_visuals/all', getWeeklySpendingVisuals.as_view()),
    path('visuals/get_spending_by_category_visuals/all', getSpendingByCategoryVisuals.as_view()),
]