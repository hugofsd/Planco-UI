import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-nao-encontrada',
  template: `
  <div class="containerVazio">
    <h1 class="text-center">Página não encontrada</h1>

    <img src="../../assets/pageNãoEncontrada.svg" 
     width="300px" 
    layout-align="center" >
    </div>
  `,
  styles: [
  ]
})
export class PageNaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
