import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VisualsModule } from "../visuals/visuals.module";
import { ExpensesModule } from "../expenses/expenses.module";
import { CategoriesModule } from "../categories/categories.module";

const routes: Routes = [
  { path: '', loadChildren: () => import('../visuals/visuals.module').then((m) => m.VisualsModule) }, 
  { path: 'visuals', loadChildren: () => import('../visuals/visuals.module').then((m) => m.VisualsModule) }, 
  // { path: 'expenses', loadChildren: () => import('../expenses/expenses.module').then((m) => m.ExpensesModule) }, 
  { path: 'categories', loadChildren: () => import('../categories/categories.module').then((m) => m.CategoriesModule) }, 
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule, VisualsModule, ExpensesModule, CategoriesModule
  ]
})
export class DashboardModule { }
