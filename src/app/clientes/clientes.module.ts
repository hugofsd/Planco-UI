import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
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
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
     PessoaComponent,
     PessoaCadastroComponent,
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
    PanelModule,

    CurrencyMaskModule
  ],
  exports: [
    PessoaComponent,
    PessoaCadastroComponent,
  ]
})
export class ClientesModule { }
