import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias-produtos/categorias.service';
import { PessoaFiltro, PessoasService } from 'src/app/clientes/pessoas.service';
import { NgForm } from '@angular/forms';
import { Lancamento } from 'src/app/core/model';
import { LancamentosService } from '../lancamentos.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
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

  codigoEdit: number | undefined;


  constructor(
    private pessoaService: PessoasService,
    private categoriaService: CategoriasService,
    private lancamentoService: LancamentosService,    
    private messageService: MessageService,
    // pegar a rota carregada
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //visualizar código
    console.log(this.route.snapshot.params['codigo']);

    const codigoPendencia = this.route.snapshot.params['codigo'];

    this.codigoEdit = codigoPendencia;

    if(codigoPendencia){
     this.carregarPendencia(codigoPendencia);
    }
    
    this.carregarCategorias()
    this.carregarClientes();
  }


  get editando() {
    return Boolean(this.lancamento.codigo)
  }
  carregarPendencia(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao CADASTRAR pendência!' })
      });
    
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

  salvar (form:NgForm){
    if(this.codigoEdit){
      this.cadastrar(form);
    // this.atualizarPendencia(form);
    } else{
      this.cadastrar(form);
    }

  }

  cadastrar(form: NgForm){
    this.lancamentoService.adicionar(this.lancamento)
    .subscribe(() => {
      form.reset();
      this.lancamento = new Lancamento();

      if(this.codigoEdit){
        this.messageService.add({key: 'msg', severity: 'success', detail: 'Pendência editada com sucesso com sucesso!' });
      } else {
        this.messageService.add({key: 'msg', severity: 'success', detail: 'Pendência cadastrada com sucesso com sucesso!' })
      }
      
    },
    error => {
      this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao CADASTRAR pendência!' })
    }); 

  }


  excluir(codigoEdit: any) {
    this.lancamentoService.excluir(codigoEdit)
      .subscribe(() => {

        this.messageService.add({ key: 'msg', severity: 'success', detail: 'Pendência excluído com sucesso!' })
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao excluir pendência!' })
      });   
  }

  pendenciaLista(){
    this.router.navigate(['lancamentos']);
  }


}
