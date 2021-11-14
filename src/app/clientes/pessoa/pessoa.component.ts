import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaFiltro, PessoasService } from '../pessoas.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  dados: any;

  pessoas: any[] = [];

  filtro = new PessoaFiltro()

  @ViewChild('tabela') grid!: Table; // para atualizar a tabela

  constructor(
    private pessoaService: PessoasService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){
    //console.log(this.filtro);
    this.pessoaService.pesquisar(this.filtro).subscribe(
      data => {
        this.pessoas = data;
        this.dados = this.pessoas.slice(0).reverse()
        console.log(this.pessoas);
      }
    )
  }

  excluir(pessoa: any) {
      this.pessoaService.excluir(pessoa.codigo)
      .subscribe(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }
        this.messageService.add({ key: 'msg', severity: 'success', detail: 'Pessoa excluído com sucesso!' })
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Existem pendências vinculadas a essa pessoa!' })
      });   
  }

  confirmarExclusao(pessoa: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(pessoa);
      },
    });
  }

  status(pessoa: any): void {
    const novoStatus = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        pessoa.ativo = novoStatus;
        this.messageService.add({ key: 'msg', severity: 'success', detail: `Pessoa ${acao} com sucesso!` });
      
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Ocorreu um erro!' })
      });  
      
  }

  ClienteCadastro(codigo: number){
    this.router.navigate(['/pessoasCadastro', codigo]);
  }

  cadastro(){
    this.router.navigate(['pessoasCadastro']);
  }
}
