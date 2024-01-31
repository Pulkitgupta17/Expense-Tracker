import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { CategoryModel } from '../../models/category.model'
import { CategoriesService } from '../categories.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categoryForm: FormGroup;
  categoryModel: CategoryModel;
  categories: any;

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.categoryModel = new CategoryModel();
   }

  ngOnInit() {
    this.initializeCategoryForm();
    this.getCategories();
  }

  initializeCategoryForm(): void {
    this.categoryForm = this.formBuilder.group({
      id: this.categoryModel.id,
      category: this.categoryModel.category,
    });
  }

    getCategories() {
      this.categoriesService.getCategories().subscribe(
        {next:(res) => {
          this.categories = res;
          // console.log(this.expenses);
          console.log('Success getting categories');
        },
        error:(err: HttpErrorResponse) => {
          console.log(err.error);
        }}
      )
    }

    deleteCategory(index:number, categoryId:number) {
      this.categoriesService.deleteCategory(categoryId).subscribe(
        {next:(res) => {
          this.categories.splice(index, 1)
        },
        error:(err: HttpErrorResponse) => {
          console.log(err.error);
        }}
      )
  }

  categoryFormSubmit() {
    const data = this.categoryForm.getRawValue();
    if(this.categoryForm.valid) {
      this.categoriesService.saveCategory(data).subscribe(
        {next:(res) => {
          console.log(res);
          this.getCategories();
        },
        error:(err: HttpErrorResponse) => {
          console.log(err.error);
        }}
      )
    }
  }

  doBefore() {
    this.router.navigate(["home/visuals"])
  }
}
