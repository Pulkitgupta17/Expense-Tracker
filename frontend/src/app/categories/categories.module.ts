import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../material-ui/material-ui.module';
const appRoutes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
  }
]

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    ReactiveFormsModule, MaterialUiModule
  ],
  exports: [
    CategoriesComponent,
  ]
})
export class CategoriesModule { }
