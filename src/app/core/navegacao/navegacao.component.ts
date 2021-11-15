import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {

  exibindoMenu = true;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  pendenciaLista(){
    this.router.navigate(['lancamentos']);
  }

  pendenciaCadastro(){
    this.router.navigate(['lancamentosCadastro']);
  }

  clienteLista(){
    this.router.navigate(['pessoas']);
  }
  clienteCadastro(){
    this.router.navigate(['pessoasCadastro']);
  }

  novaVenda(){
    this.router.navigate(['novaVenda']);
  }

  controleVenda(){
    this.router.navigate(['controleVenda']);
  }

  home(){
    this.router.navigate(['home']);
  }


  empresas(){
    this.router.navigate(['empresas']);
  }

  empresasCadastro(){
    this.router.navigate(['empresaCadastro']);
  }

  categorias(){
    this.router.navigate(['categorias'])
  }
}
