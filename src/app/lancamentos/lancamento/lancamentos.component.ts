import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentosService, LancamentoFiltro } from '../lancamentos.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentoListaComponent implements OnInit {


  dados: any;

  lancamentos: any[] = [] ;
  

  filtro = new LancamentoFiltro()

  @ViewChild('tabela') grid!: Table; // para atualizar a tabela

  constructor(
    private lancamentoService: LancamentosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.pesquisar();  
  }

  
//  if(this.filtro.codigo){
  //    const codigo = this.filtro.codigo;
  //    this.buscarPorCodigo(codigo);
  //  } else{
 pesquisar (){
   console.log(this.filtro);
  
    this.lancamentoService.pesquisar(this.filtro).subscribe(data  =>{
      this.lancamentos = data.content;
      this.dados = this.lancamentos.slice(0).reverse()
      this.messageService.add({ severity: 'success', detail: 'Pendência excluído com sucesso!' })
     // console.log(this.lancamentos);
    })
   

  // console.log(this.lancamentos)

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
    },
    error => {
      this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao excluir pendência!' })
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


pendenciaCadastro(codigo: number){
  this.router.navigate(['/lancamentosCadastro', codigo]);
}


cadastro(){
  this.router.navigate(['lancamentosCadastro']);
}
}
 