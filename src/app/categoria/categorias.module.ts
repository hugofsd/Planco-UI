import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CategoriasComponent } from './categorias/categorias.component';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    CategoriasComponent,


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
    DialogModule,
    DividerModule,
    PanelModule
  ],
  exports: [
    // CategoriasComponent,
    // CategoriaCadastroComponent,
  ]
})
export class CategoriasModule { }
