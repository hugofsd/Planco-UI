import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { EmpresaFiltro, EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  dados: any;


  empresa: any[] = [];

  filtro = new EmpresaFiltro()

  @ViewChild('tabela') grid!: Table; // para atualizar a tabela

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private empresaServise: EmpresaService,
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){
    this.empresaServise.pesquisar(this.filtro).subscribe(
      data => {
        this.empresa = data;
        this.dados = this.empresa.slice(0).reverse()
        console.log(this.empresa);
      }
    )
  }

  excluir(empresa: any) {
    this.empresaServise.excluir(empresa.codigo)
    .subscribe(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.reset();
      }
      this.messageService.add({ key: 'msg', severity: 'success', detail: 'Empresa excluído com sucesso!' })
    },
    error => {
      this.messageService.add({ key: 'msg', severity: 'error', detail: 'Cliente com vínculo!' })
    });   
}

confirmarExclusao(empresa: any): void {
  this.confirmationService.confirm({
    message: 'Tem certeza que deseja excluir?',
    accept: () => {
        this.excluir(empresa);
    },
  });
}

status(empresa: any): void {
  const novoStatus = !empresa.ativo;

  this.empresaServise.mudarStatus(empresa.codigo, novoStatus)
    .then(() => {
      const acao = novoStatus ? 'ativada' : 'desativada';

      empresa.ativo = novoStatus;
      this.messageService.add({ key: 'msg', severity: 'success', detail: `Empresa ${acao} com sucesso!` });
    
    },
    error => {
      this.messageService.add({ key: 'msg', severity: 'error', detail: 'Ocorreu um erro!' })
    });  


    
}

cadastro(){
    this.router.navigate(['empresaCadastro']);
  }

  empresaCadastro(codigo: number){
    this.router.navigate(['/empresaCadastro', codigo]);
  }

 

}
