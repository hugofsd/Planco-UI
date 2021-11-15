import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Categoria } from 'src/app/core/model';
import { CategoriaFiltro, CategoriaService } from '../categoria.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  dados: any;

  jaCadastrado: any;

  categorias: any[] = [];

  filtro = new CategoriaFiltro()

  display: boolean = false;

  categoria = new Categoria();

  @ViewChild('tabela') grid!: Table; // para atualizar a tabela


  
  constructor(
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){
    this.categoriaService.pesquisar(this.filtro).subscribe(
      data => {
        this.categorias = data;
        this.dados = this.categorias.slice(0).reverse()
        console.log(this.categorias);
      }
    )
  }

  excluir(categoria: any) {
    this.categoriaService.excluir(categoria.codigo)
    .subscribe(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.reset();
      }
      this.messageService.add({ key: 'msg', severity: 'success', detail: 'Categoria excluído com sucesso!' })
    },
    error => {
      this.messageService.add({ key: 'msg', severity: 'error', detail: 'Categoria com vínculo!' })
    });   
}

confirmarExclusao(categoria: any): void {
  this.confirmationService.confirm({
    message: 'Tem certeza que deseja excluir?',
    accept: () => {
        this.excluir(categoria);
    },
  });
}

cadastro(){
  this.router.navigate(['categoriasCadastro']);
}


categoriaCadastro(){
  this.display = true; 
}


cadastrar(form: NgForm){
  this.categoriaService.adicionar(this.categoria)
  .subscribe(() => {
    form.reset();
    this.categoria = new Categoria();
    this.messageService.add({key: 'msg', severity: 'success', detail: 'Categoria cadastrado com sucesso!' });
    this.pesquisar();
    this.display = false;
  
  },
  error => {
    this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao cadastrar cliente!' })
  }); 
}

abrirEdicao(codigo: number){

  this.categoriaService.buscarPorCodigo(codigo)
  .subscribe(categoria => {
    this.categoria = categoria;
  },
  error => {
    this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao CADASTRAR pendência!' })
  });
  
  this.display = true; 
}



NovoCadastro(codigo: number){
  this.categoriaService.buscarPorCodigo(codigo)
      .subscribe(categorias => {
        this.dialogo(categorias)
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao CADASTRAR pendência!' })
      });
}

dialogo(cadastrar: any){
  this.display = true;
  this.jaCadastrado = cadastrar;
  console.log('Categoria',this.jaCadastrado)
}


abrirDialogo(){
  this.display = true;
}


voltar(){
  this.display = false;
}
}
  