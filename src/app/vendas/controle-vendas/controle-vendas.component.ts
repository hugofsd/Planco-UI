import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-vendas',
  templateUrl: './controle-vendas.component.html',
  styleUrls: ['./controle-vendas.component.scss']
})
export class ControleVendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  vendas = [
    { id: '01', cliente: 'Ana', Data: '01/01/2021', total: 1880 },
    { id: '02', cliente: 'Caio', Data: '01/01/2021', total: 880 },
    { id: '03', cliente: 'Alex', Data: '01/01/2021', total: 100 },
    { id: '04', cliente: 'Beatriz', Data: '01/01/2021', total: 4880 },
  ];
    

}
