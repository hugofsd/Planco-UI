import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categoria/categorias/categorias.component';
import { PessoaCadastroComponent } from './clientes/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaComponent } from './clientes/pessoa/pessoa.component';
import { PageNaoEncontradaComponent } from './core/page-nao-encontrada.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmpresaCadastroComponent } from './empresa/empresa-cadastro/empresa-cadastro.component';
import { EmpresasComponent } from './empresa/empresas/empresas.component';
import { LancamentoListaComponent } from './lancamentos/lancamento/lancamentos.component';
import { LancamentosCadastroComponent } from './lancamentos/lancamentos-cadastro/lancamentos-cadastro.component';
import { ControleVendasComponent } from './vendas/controle-vendas/controle-vendas.component';
import { NovaVendaComponent } from './vendas/nova-venda/nova-venda.component';




const routes: Routes = [

  

  // HOME REDIRECIONADA
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: DashboardComponent },
  // -----------------Pendências--------------------
  //listagem
  {path: 'lancamentos', component: LancamentoListaComponent },
  

  //cadastro
  {path: 'lancamentosCadastro', component: LancamentosCadastroComponent },

  //editar
  {path: 'lancamentosCadastro/:codigo', component: LancamentosCadastroComponent },
   // ----------------------------------------------


   // -----------------Clientes--------------------
  {path: 'pessoas', component: PessoaComponent },

  {path: 'pessoasCadastro', component: PessoaCadastroComponent },

  {path: 'pessoasCadastro/:codigo', component: PessoaCadastroComponent },
  // ----------------------------------------------


  // -----------------EMPRESA--------------------
  {path: 'empresas', component: EmpresasComponent },

  {path: 'empresaCadastro', component: EmpresaCadastroComponent },

  {path: 'empresaCadastro/:codigo', component: EmpresaCadastroComponent },

  
  // ----------------------------------------------

  // -----------------Categorias--------------------

  {path: 'categorias', component: CategoriasComponent },

  //{path: 'categoriasCadastro', component: CategoriaCadastroComponent },

  //{path: 'categoriasCadastro/:codigo', component: CategoriaCadastroComponent },


 
    // ----------------------------------------------

  {path: 'novaVenda', component: NovaVendaComponent },

  {path: 'controleVenda', component: ControleVendasComponent },

  { path: 'pagina-nao-encontrada', component: PageNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
