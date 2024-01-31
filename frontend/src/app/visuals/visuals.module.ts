import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualsComponent } from './visuals/visuals.component';
import { Routes, RouterModule } from "@angular/router";
import { ExpensesModule } from '../expenses/expenses.module';
import { MaterialUiModule } from '../material-ui/material-ui.module';
const appRoutes: Routes = [
  {
    path: '',
    component: VisualsComponent,
  }
]

@NgModule({
  declarations: [
    VisualsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(appRoutes), ExpensesModule, MaterialUiModule
  ],
  exports: [VisualsComponent]
})
export class VisualsModule { }
