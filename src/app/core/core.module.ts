import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacaoComponent } from './navegacao/navegacao.component';



@NgModule({
  declarations: [
    NavegacaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavegacaoComponent
  ]
})

// modulo reservado para componentes que são incluidos diretamento no app.component.
export class CoreModule { }
