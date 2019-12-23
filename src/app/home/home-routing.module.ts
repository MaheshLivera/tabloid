import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdsComponent } from './ads/ads.component';
import { TutsComponent } from './tuts/tuts.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
  { 
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: 'tuts', component: TutsComponent},
      {path: 'ads', component: AdsComponent}
    ]    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
