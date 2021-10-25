import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCadastroComponent } from './clientes/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaComponent } from './clientes/pessoa/pessoa.component';
import { LancamentoListaComponent } from './lancamentos/lancamento/lancamentos.component';
import { LancamentosCadastroComponent } from './lancamentos/lancamentos-cadastro/lancamentos-cadastro.component';
import { ControleVendasComponent } from './vendas/controle-vendas/controle-vendas.component';
import { NovaVendaComponent } from './vendas/nova-venda/nova-venda.component';



const routes: Routes = [

  {path: 'lancamentos', component: LancamentoListaComponent },

  {path: 'lancamentosCadastro', component: LancamentosCadastroComponent },
  
  {path: 'pessoas', component: PessoaComponent },

  {path: 'pessoasCadastro', component: PessoaCadastroComponent },

  {path: 'novaVenda', component: NovaVendaComponent },

  {path: 'controleVenda', component: ControleVendasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
