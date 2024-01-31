import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { ExpenseModel } from '../../models/expense.model'
import { ExpensesService } from '../expenses.service'
import { CategoriesService } from "../../categories/categories.service";
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements OnInit{
  expenseForm: FormGroup;
  expenseModel: ExpenseModel;
  expenses: any;
  categories: any;
  expense: any;

  constructor(
    private expensesService: ExpensesService,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.expenseModel = new ExpenseModel();
  }

  ngOnInit() {
    this.initializeExpenseForm();
    this.getExpenses();
    this.getCategories();
  }

  initializeExpenseForm(): void {
    this.expenseForm = this.formBuilder.group({
      id: this.expenseModel.id,
      expense: this.expenseModel.expense,
      category: this.expenseModel.category,
      date: this.expenseModel.date,
      amount: this.expenseModel.amount,
    });
  }

  getExpenses() {
    this.expensesService.getExpenses().subscribe(
      {next:(res) => {
        this.expenses = res;
        console.log(this.expenses);
        // console.log('Success getting expenses');
      },
      error:(err: HttpErrorResponse) => {
        console.log(err.error);
      }}
    )
  }

      getCategories() {
        this.categoriesService.getCategories().subscribe(
          {next:(res:any) => {
            this.categories = res;
            // console.log(this.expenses);
            // console.log('Success getting categories');
          },
          error:(err: HttpErrorResponse) => {
            console.log(err.error);
          }}
        )
      }

  getExpense(expenseId:number) {
    this.expensesService.getExpense(expenseId).subscribe(
      {next: (res) => {
        console.log(res)
        this.expense = res;
        this.expenseForm.patchValue({
          id: this.expense.id,
          expense: this.expense.expense,
          category: this.expense.category,
          date: this.expense.date,
          amount: this.expense.amount,
        })

      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      }}
    )
}


deleteExpense(index: number, expenseId: number) {
  const confirmDelete = window.confirm('Are you sure?');
  
  if (confirmDelete) {
    this.expensesService.deleteExpense(expenseId).subscribe({
      next: (res) => {
        this.expenses.splice(index, 1);
      },
      error: (err: HttpErrorResponse) => {
        console.error(err.error);
      },
    });
  }
}

changeRoute() {
  this.router.navigate(["home/categories"]);
}

expenseFormSubmit() {
  const data = this.expenseForm.getRawValue();

  if (this.expenseForm.valid) {
    console.log(data);

    this.expensesService.saveExpense(data).subscribe({
      next: (res) => {
        console.log(res);
        this.expenseForm.reset();
        this.getExpenses();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}}
