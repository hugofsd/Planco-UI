import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
  constructor(
    private http: HttpClient,
  ) { }


  private API = environment.apiurl;

  lancamentosPorCategoria(): Promise<Array<any>> {
    return this.http.get(`${this.API}/lancamentos/estatisticas/por-categoria`)
      .toPromise()
      .then((response : any) => response);
  }

  lancamentosPorDia(): Promise<Array<any>> {
    return this.http.get(`${this.API}/lancamentos/estatisticas/por-dia`)
      .toPromise()
      .then((response : any) => {
        const dados = response;
        this.converterStringsParaDatas(dados);

        return dados;
      });
  }

  private converterStringsParaDatas(dados: Array<any>) {
    for (const dado of dados) {
      dado.dia = moment(dado.dia, 'YYYY-MM-DD').toDate();
    }
  }
}
