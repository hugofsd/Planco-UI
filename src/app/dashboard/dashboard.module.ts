import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PanelModule} from 'primeng/panel';
import {ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    ChartModule,
    TableModule,
    CardModule,
    ButtonModule,
    DialogModule,
    DividerModule,
    TabMenuModule,
    
    
  ]
})
export class DashboardModule { }
