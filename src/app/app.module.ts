import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//imports primeng
import {CardModule} from 'primeng/card';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { InputMaskModule } from 'primeng/inputmask';
import { MensagemComponent } from './mensagem/mensagem.component';
import { FormsModule } from '@angular/forms';
import {MenuModule} from 'primeng/menu';
@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    LancamentosCadastroComponent,
    NavegacaoComponent,
    PessoaComponent,
    PessoaCadastroComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    FormsModule,
    MenuModule,



    CurrencyMaskModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
