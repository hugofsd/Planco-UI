import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoListaComponent } from './lancamento/lancamentos.component';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    LancamentoListaComponent,
    LancamentosCadastroComponent
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
  //exportar para outros componetes
  exports: [
    LancamentoListaComponent,
    LancamentosCadastroComponent
  ]
})
export class LancamentosModule { }
