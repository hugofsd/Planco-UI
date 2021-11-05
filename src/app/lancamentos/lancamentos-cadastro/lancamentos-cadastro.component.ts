import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias-produtos/categorias.service';
import { PessoaFiltro, PessoasService } from 'src/app/clientes/pessoas.service';
import { NgForm } from '@angular/forms';
import { Lancamento } from 'src/app/core/model';
import { LancamentosService } from '../lancamentos.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.scss']
})
export class LancamentosCadastroComponent implements OnInit {

  categorias: any[] = [];

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];




  filtro = new PessoaFiltro()  

  pessoas: any[] = [];

  lancamento: Lancamento = new Lancamento();


  constructor(
    private pessoaService: PessoasService,
    private categoriaService: CategoriasService,
    private lancamentoService: LancamentosService,    
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.carregarCategorias()
    this.carregarClientes();
  }


  carregarCategorias() {

    return this.categoriaService.listarCategorias()
    .subscribe(categorias => {
      this.categorias = categorias.map((c: any) => ({ label: c.name, value: c.codigo }));
   console.log(categorias)

   console.log(this.categorias)
   
    })
  }

  carregarClientes(){
    //console.log(this.filtro);
    this.pessoaService.pesquisar(this.filtro).subscribe(
      data => {
        this.pessoas = data.map((c: any) => ({ label: c.nome, value: c.codigo }));
        console.log(this.pessoas);
      }
    )
  }

  cadastrar(form: NgForm){
    this.lancamentoService.adicionar(this.lancamento)
    .subscribe(() => {
      form.reset();
      this.lancamento = new Lancamento();
      this.messageService.add({key: 'msg', severity: 'success', detail: 'Pendência cadastrada com sucesso com sucesso!' });
    },
    error => {
      this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao CADASTRAR pendência!' })
    }); 

  }

}
