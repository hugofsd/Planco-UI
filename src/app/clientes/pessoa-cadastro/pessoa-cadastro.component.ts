import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Pessoa } from 'src/app/core/model';
import { PessoasService } from '../pessoas.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.scss']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoasService,
    private messageService: MessageService,
  ) { }

  

  ngOnInit(): void {
  }

  cadastrar(form: NgForm) {
    this.pessoaService.adicionar(this.pessoa)
      .subscribe(() => {
        form.reset();
        this.pessoa = new Pessoa();
        this.messageService.add({key: 'msg', severity: 'success', detail: 'Cliente cadastrado com sucesso com sucesso!' });
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao cadastrar cliente!' })
      }); 
  }

}
