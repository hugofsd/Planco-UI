import { Component, OnInit } from '@angular/core';
import { LancamentosService, LancamentoFiltro } from '../lancamentos.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentoListaComponent implements OnInit {

  // descricao: string = '';
  lancamentos: any[] = [] ;
  // dataVencimentoInicio?: Date ;
  // dataVencimentoFim?: Date;

  filtro = new LancamentoFiltro


  // filtro = {
  //   dataVencimentoFim: new Date(),
  //   dataVencimentoInicio: new Date(),
  // };

  constructor(private lancamentoService: LancamentosService) { }

  ngOnInit(): void {
    this.pesquisar();  
  }

 pesquisar (){


   console.log(this.filtro);
   this.lancamentoService.pesquisar(this.filtro).subscribe(data  =>{
     this.lancamentos = data.content;
     console.log(this.lancamentos);
   })
 }

  // pesquisar(): void {
  //   this.lancamentoService.pesquisar()
  //    .then(lancamentos => this.lancamentos = lancamentos);
  // }



}
 