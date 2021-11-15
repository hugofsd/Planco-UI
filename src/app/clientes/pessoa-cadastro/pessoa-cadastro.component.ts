import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Pessoa } from 'src/app/core/model';
import { PessoasService } from '../pessoas.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.scss']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  codigoEdit: number | undefined;

  codigoPendencia: any

  constructor(
    private pessoaService: PessoasService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  

  ngOnInit(): void {

    console.log(this.route.snapshot.params['codigo']);

    this.codigoPendencia = this.route.snapshot.params['codigo'];

    this.codigoEdit = this.codigoPendencia;

    if(this.codigoPendencia){
      this.buscarPorCodigo(this.codigoPendencia);
     }

  }

  get editando() {
    return Boolean(this.pessoa.codigo)
  }

  salvar (form:NgForm){
    if(this.codigoEdit){
      this.cadastrar(form);
    // this.atualizarPendencia(form);
    } else{
      this.cadastrar(form);
    }

  }

  cadastrar(form: NgForm) {
    this.pessoaService.adicionar(this.pessoa)
      .subscribe(() => {
        form.reset();
        this.pessoa = new Pessoa();
        this.messageService.add({key: 'msg', severity: 'success', detail: 'Cliente cadastrado com sucesso!' });
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao cadastrar cliente!' })
      }); 
  }

  buscarPorCodigo(codigo: number){
    this.pessoaService.buscarPorCodigo(codigo)
      .subscribe(pessoa => {
        this.pessoa = pessoa;
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao CADASTRAR pendência!' })
      });
  }

  voltar(){
    this.router.navigate(['pessoas']);
  }

}
