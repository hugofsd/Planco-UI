import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    EmpresasComponent,
    EmpresaCadastroComponent,
 
  ],
  imports: [
    CommonModule, 
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CardModule,
    PanelModule
  ],
  exports: [
    EmpresasComponent,
    EmpresaCadastroComponent,
 
  ]
})
export class EmpresaModule { }
