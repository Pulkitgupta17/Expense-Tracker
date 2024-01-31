import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    TopNavigationComponent,
    SideNavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ], exports:[TopNavigationComponent, SideNavigationComponent, FooterComponent]
})
export class SharedModule { }
