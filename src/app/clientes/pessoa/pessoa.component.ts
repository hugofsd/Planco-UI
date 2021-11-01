import { Component, OnInit } from '@angular/core';
import { PessoaFiltro, PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas: any[] = [];

  filtro = new PessoaFiltro()

  constructor(
    private pessoaService: PessoasService
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
}
