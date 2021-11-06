import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PageNaoEncontradaComponent } from './page-nao-encontrada.component';

@NgModule({
  declarations: [
    NavegacaoComponent,
    PageNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavegacaoComponent
  ],
  providers: [
    DatePipe,
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})

// modulo reservado para componentes que são incluidos diretamento no app.component.
export class CoreModule { }
