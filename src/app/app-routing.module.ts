import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosCadastroComponent } from './lancamentos/lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentoListaComponent } from './lancamentos/lancamento/lancamentos.component';
import { PessoaComponent } from './clientes/pessoa/pessoa.component';
import { PessoaCadastroComponent } from './clientes/pessoa-cadastro/pessoa-cadastro.component';



const routes: Routes = [

  {path: 'lancamentos', component: LancamentoListaComponent },

  {path: 'lancamentosCadastro', component: LancamentosCadastroComponent },
  
  {path: 'pessoas', component: PessoaComponent },

  {path: 'pessoasCadastro', component: PessoaCadastroComponent },



  

  

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
