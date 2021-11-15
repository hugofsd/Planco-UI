import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias-produtos/categorias.service';
import { PessoaFiltro, PessoasService } from 'src/app/clientes/pessoas.service';
import { NgForm } from '@angular/forms';
import { Empresa, Lancamento, Pessoa } from 'src/app/core/model';
import { LancamentosService } from '../lancamentos.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from 'src/app/empresa/empresa.service';

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

  empresas: any[] = [];

  filtroPessoaAtiva: any[] = [];

  lancamento: Lancamento = new Lancamento();

  codigoEdit: number | undefined;

  codigoPessoaNull: number = 12

  codigoeEmpresaNull: number = 5

  pessoaNull = new Pessoa();

  empresaNull = new Empresa();

  constructor(
    private pessoaService: PessoasService,
    private categoriaService: CategoriasService,
    private lancamentoService: LancamentosService,    
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    //visualizar código
    console.log(this.route.snapshot.params['codigo']);

    const codigoPendencia = this.route.snapshot.params['codigo'];

    this.codigoEdit = codigoPendencia;

    if(codigoPendencia){
     this.carregarPendencia(codigoPendencia);
    }

   
      this.buscarPessoaNula(this.codigoPessoaNull);
      this.buscarEmpresaNula(this.codigoeEmpresaNull);
     
    
    this.carregarCategorias()
    this.carregarClientes();
    this.carregarEmpresa();
  }

  buscarPessoaNula(codigo: number){
    this.pessoaService.buscarPorCodigo(codigo)
      .subscribe(pessoa => {
        this.pessoaNull = pessoa;
        console.log(this.pessoaNull);
      },
      error => {
       console.log(error)
      });
  }

  buscarEmpresaNula(codigo: number){
    this.empresaService.buscarPorCodigo(codigo)
      .subscribe(empresa => {
        this.empresaNull = empresa;
        console.log(this.empresaNull);
      },
      error => {
        console.log(error)
       });
     
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
    })
  }

  carregarClientes(){
    //console.log(this.filtro);
    this.pessoaService.pesquisar(this.filtro).subscribe(
      data => {
        this.pessoas = data.map((c: any) => ({
           label: c.nome,
           value: c.codigo,
           ativo: c.ativo
          }));
        console.log(data);
        console.log(this.pessoas);
      }
    )
  }

  carregarEmpresa(){
    this.empresaService.pesquisar(this.filtro).subscribe(
      data =>{
        this.empresas = data.map((c: any) => ({
          label: c.nome,
          value: c.codigo,
          ativo: c.ativo
         }));
         console.log(this.empresas);
      }
    )
  }

  conferirAtivo(form:NgForm){
    console.log(this.lancamento.pessoa.ativo)
    if(this.lancamento.pessoa.ativo === true){
      console.log('ativo')
      this.salvar(form);
    } else {
      console.log('inativo')
    }
      
    
    
   
  }

  salvar (form:NgForm){
    console.log(form)
    if(form.value.pessoa  === undefined && form.value.empresa === undefined ){
      this.lancamento.pessoa = this.pessoaNull
      this.lancamento.empresa = this.empresaNull
     }
     if(form.value.pessoa != undefined && form.value.empresa === undefined  ){
      this.lancamento.empresa = this.empresaNull
     } 
     if(form.value.pessoa === undefined && form.value.empresa != undefined  ){
      this.lancamento.pessoa = this.pessoaNull
     } 
     


     
      if(this.codigoEdit){
       // console.log(form)
          this.cadastrar(form);
        } 
        else{
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
        //console.log(this.lancamento)

        this.pendenciaLista()
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
