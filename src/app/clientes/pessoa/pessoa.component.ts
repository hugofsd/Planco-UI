import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaFiltro, PessoasService } from '../pessoas.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas: any[] = [];

  filtro = new PessoaFiltro()

  @ViewChild('tabela') grid!: Table; // para atualizar a tabela

  constructor(
    private pessoaService: PessoasService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){
    //console.log(this.filtro);
    this.pessoaService.pesquisar(this.filtro).subscribe(
      data => {
        this.pessoas = data;
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
        this.messageService.add({ key: 'msg', severity: 'success', detail: 'Pendência excluído com sucesso!' })
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Cliente com vínculo!' })
      }
  
      );   
      
   
    
  }


  confirmarExclusao(pessoa: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(pessoa);
      },
    });
  }
}
