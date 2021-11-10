import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  pieChartData: any;

  lineChartData: any;


  clienteChartData = {
    labels: ['Mensal', 'Educação', 'Lazer', 'Imprevistos'],
    datasets: [
      {
        data: [2500, 2700, 550, 235],
        backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC']
      }
    ]
  };

 


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {

   this.pizza();

   this.linha();

}


pizza() {
  this.dashboardService.lancamentosPorCategoria()
    .then(dados => {
      
      this.pieChartData = {
        labels: dados.map(dado => dado.categoria.name),
        datasets: [
          {
            data: dados.map(dado => dado.total),
            backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6',
                                '#DD4477', '#3366CC', '#DC3912']
          }
        ]
      };

      console.log(dados);
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
            borderColor: '#3366CC'
          }, {
            label: 'Despesas',
            data: totaisDespesas,
            borderColor: '#D62B00'
          }
        ]
      }
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
}
