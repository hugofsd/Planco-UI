import { Component, OnInit } from '@angular/core';
import { LancamentosService } from '../lancamentos.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentoListaComponent implements OnInit {

  descricao: string = '';
  lancamentos: any[] = [] ;

  constructor(private lancamentoService: LancamentosService) { }

  ngOnInit(): void {
    this.pesquisar();  
  }

 pesquisar (){
   console.log(this.descricao);
   this.lancamentoService.pesquisar({ descricao: this.descricao}).subscribe(data  =>{
     this.lancamentos = data.content;
     console.log(this.lancamentos);
   })
 }

  // pesquisar(): void {
  //   this.lancamentoService.pesquisar()
  //    .then(lancamentos => this.lancamentos = lancamentos);
  // }



}
 