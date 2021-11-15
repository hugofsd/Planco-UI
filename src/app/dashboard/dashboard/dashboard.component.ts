import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { PessoaFiltro, PessoasService } from 'src/app/clientes/pessoas.service';
import { LancamentoFiltro, LancamentosService } from 'src/app/lancamentos/lancamentos.service';
import { DashboardService } from '../dashboard.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  items!: MenuItem[];
  activeItem!: MenuItem;
  
  pieChartData: any;

  lineChartData: any;

  pessoas: any[] = [];

  filtroPessoa = new PessoaFiltro();


  filtro = new LancamentoFiltro()


  mostrarFaturamento: boolean = false;
  mostrarPizza: boolean = true;

  clienteChartData = {
    labels: ['Mensal', 'Educação', 'Lazer', 'Imprevistos'],
    datasets: [
      {
        data: [2500, 2700, 550, 235],
        backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC']
      }
    ]
  };

  lancamentos: any[] = [] ;


  receita: number[] | undefined;

  despesa: number[] | undefined;

  receitaTotal: number | undefined;;

  despesaTotal: number | undefined;

  lucro: number = 0;

  venda: any;

  @ViewChild('ultimasVendas') grid!: Table; // para atualizar a tabela


  display: boolean = false;

  dados: any;

  constructor(
  private dashboardService: DashboardService,
  private lancamentoService: LancamentosService,
  private pessoaService: PessoasService,
  private messageService: MessageService,
  private router: Router,
  private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {

   this.pizza();

   this.linha();

   this.pesquisar();  

   this.pesquisarPessoas();

   this.items = [
            {label: 'Dados por categoria', icon: 'pi pi-fw pi-home',
          
            command: (event) => {
       
          this.mostrarFaturamento = false;
          this.mostrarPizza = true;
          
          }},
            {label: 'Balanço do mês', icon: 'pi pi-fw  pi-file',
            command: (event) => {
       
              this.mostrarPizza = false;
              this.mostrarFaturamento = true;
              
          }},
          
          
          
        ];

        this.activeItem = this.items[0];
}

muder(){
  this.mostrarFaturamento = !this.mostrarFaturamento
}

dialogo(venda: any){
  this.display = true;
  this.venda = venda;
  console.log('Venda',this.venda)
}
 
visualizarVenda(codigo: number){
  this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.dialogo(lancamento)
      },
      error => {
        this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao CADASTRAR pendência!' })
      });
}

pesquisarPessoas(){
  //console.log(this.filtro);
  this.pessoaService.pesquisar(this.filtroPessoa).subscribe(
    data => {
      this.pessoas = data;
     // console.log(this.pessoas);
    }
  )
}

pesquisar (){
  console.log(this.filtro);
  this.lancamentoService.pesquisar(this.filtro).subscribe(data  =>{
    this.lancamentos = data.content;

    this.dados = this.lancamentos.slice(0).reverse()


//   console.log(this.lancamentos);
  })
}

pizza() {
  this.dashboardService.lancamentosPorCategoria()
    .then(dados => {
      
      this.pieChartData = {
        labels: dados.map(dado => dado.categoria.name),
        
        
        datasets: [
          {
            data: dados.map(dado => dado.total),
            backgroundColor: ['#4B1A75', '#DA70D6', '#673BB7', '#666BAD']
            
          }
        ]
      };
  //    console.log(dados)
    });

    
}

linha() {
  this.dashboardService.lancamentosPorDia()
    .then(dados => {
      const diasDoMes = this.configurarDiasMes();
      const totaisReceitas = this.totaisPorCadaDiaMes(
        dados.filter(dado => dado.tipo === 'RECEITA'), diasDoMes);
      const totaisDespesas = this.totaisPorCadaDiaMes(
        dados.filter(dado => dado.tipo === 'DESPESA'), diasDoMes);

      this.lineChartData = {
        labels: diasDoMes,
        datasets: [
          {
            label: 'Receitas',
            data: totaisReceitas,
            borderColor: '#4B1A75'
          }, {
            label: 'Despesas',
            data: totaisDespesas,
            borderColor: '#DA70D6'
          }
        ]
      }


      this.receita = totaisReceitas;


      this.despesa = totaisDespesas;

      //Calcula a despesa total do mês
      const despesatotal = this.despesa.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual;
      }, 0)

      const receitatotal = this.receita.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual;
      }, 0)

      this.lucro = ( receitatotal- despesatotal);

    //  console.log(this.lucro)
     
    });
}

private totaisPorCadaDiaMes(dados:any, diasDoMes:any) {
  const totais: number[] = [];
  for (const dia of diasDoMes) {
    let total = 0;

    for (const dado of dados) {
      if (dado.dia.getDate() === dia) {
        total = dado.total;

        break;
      }
    }

    totais.push(total);
  }

  return totais;
}

private configurarDiasMes() {
  const mesReferencia = new Date();
  mesReferencia.setMonth(mesReferencia.getMonth() + 1);
  mesReferencia.setDate(0);

  const quantidade = mesReferencia.getDate();

  const dias: number[] = [];

  for (let i = 1; i <= quantidade; i++) {
    dias.push(i);
  }

  return dias;
}

excluir(lancamento: any) {
  this.lancamentoService.excluir(lancamento.codigo)
    .subscribe(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      
      } else {
        this.grid.reset();

      }
      this.messageService.add({ key: 'msg', severity: 'success', detail: 'Venda excluído com sucesso!' })
    },
    error => {
      this.messageService.add({ key: 'msg', severity: 'error', detail: 'Erro ao excluir Venda!' })
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
