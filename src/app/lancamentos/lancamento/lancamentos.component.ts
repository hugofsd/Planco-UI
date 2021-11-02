import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentosService, LancamentoFiltro } from '../lancamentos.service';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentoListaComponent implements OnInit {

  lancamentos: any[] = [] ;

  filtro = new LancamentoFiltro()

  @ViewChild('tabela') grid!: Table;

  constructor(
    private lancamentoService: LancamentosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit(): void {
    this.pesquisar();  
  }

 pesquisar (){
   console.log(this.filtro);
   this.lancamentoService.pesquisar(this.filtro).subscribe(data  =>{
     this.lancamentos = data.content;
     this.messageService.add({ severity: 'success', detail: 'Pendência excluído com sucesso!' })
     console.log(this.lancamentos);
   })
 }

 excluir(lancamento: any) {
  this.lancamentoService.excluir(lancamento.codigo)
    .subscribe(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      
      } else {
        this.grid.reset();

      }
      this.messageService.add({ key: 'msg', severity: 'success', detail: 'Pendência excluído com sucesso!' })
    });   
}

confirmarExclusao(lancamento: any): void {
  this.confirmationService.confirm({
    message: 'Tem certeza que deseja excluir?',
    accept: () => {
        this.excluir(lancamento);
    },
  });
}
  
 

}
 