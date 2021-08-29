import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [

  {path: 'lancamentos', component: LancamentosComponent },

  {path: 'pessoas', component: PessoaComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
