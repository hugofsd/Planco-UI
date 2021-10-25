import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleVendasComponent } from './controle-vendas/controle-vendas.component';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ControleVendasComponent,
    NovaVendaComponent
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

    CurrencyMaskModule
  ],

  exports:[
    ControleVendasComponent,
    NovaVendaComponent

  ]
})
export class VendasModule { }
