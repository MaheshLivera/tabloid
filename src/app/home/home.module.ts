import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads/ads.component';
import { TutsComponent } from './tuts/tuts.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [AdsComponent, TutsComponent,HomeComponent],
  imports: [
    CommonModule,    
    HomeRoutingModule
  ]
})
export class HomeModule { }
