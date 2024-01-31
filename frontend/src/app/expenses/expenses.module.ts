import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses/expenses.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialUiModule } from '../material-ui/material-ui.module';

const appRoutes: Routes = [
  {
    path: 'expenses',
    component: ExpensesComponent,
  }
]

@NgModule({
  declarations: [
    ExpensesComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    ReactiveFormsModule, HttpClientModule, MaterialUiModule
  ],
  exports: [
    ExpensesComponent,
  ],
})
export class ExpensesModule { }
