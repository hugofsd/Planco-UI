import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PanelModule} from 'primeng/panel';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    ChartModule,
  ]
})
export class DashboardModule { }
