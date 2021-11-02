import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias-produtos/categorias.service';
import { PessoaFiltro, PessoasService } from 'src/app/clientes/pessoas.service';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.scss']
})
export class LancamentosCadastroComponent implements OnInit {

  categorias: any[] = [];

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  filtro = new PessoaFiltro()  

  pessoas: any[] = [];


  constructor(
    private pessoaService: PessoasService,
    private categoriaService: CategoriasService,
  ) { }

  ngOnInit(): void {
    this.carregarCategorias()
    this.carregarClientes();
  }


  carregarCategorias() {

    return this.categoriaService.listarCategorias()
    .subscribe(categorias => {
      this.categorias = categorias.map((c: any) => ({ label: c.name, value: c.codigo }));
   console.log(categorias)

   console.log(this.categorias)
   
    })
  }

  carregarClientes(){
    //console.log(this.filtro);
    this.pessoaService.pesquisar(this.filtro).subscribe(
      data => {
        this.pessoas = data.map((c: any) => ({ label: c.nome, value: c.codigo }));
        console.log(this.pessoas);
      }
    )
  }

}
