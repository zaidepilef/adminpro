import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { Graficas2Component } from './graficas2/graficas2.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    Graficas2Component,
    ProgressComponent
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    Graficas2Component,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
