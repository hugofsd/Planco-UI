import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { Lancamento } from '../core/model';

export class LancamentoFiltro {
  descricao?: string;
  dataVencimentoInicio?: Date;
  dataVencimentoFim?: Date;
  codigo?:number;
  // pagina = 1;
  // itensPorPagina = 2;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
    ) { }

 lancamentosUrl = 'http://localhost:8080/lancamentos';

 private API = environment.apiurl;


 lancamento: Lancamento = new Lancamento();

  pesquisar(filtro: LancamentoFiltro): Observable<any> {
    let params = new HttpParams()
     // .set('page', filtro.pagina.toString()) // paga paginação
     //  .set('size', filtro.itensPorPagina.toString()); // para paginação
     //if para filtro por descrição e data
    if(filtro.descricao){ 
      params = params.set('descricao', filtro.descricao);
    }    

    if(filtro.codigo){ 
      params = params.set('codigo', filtro.codigo);
    } 
 
   
    if (filtro.dataVencimentoInicio) {
      params = params.set('DataVencimentoDe', this.datePipe.transform(filtro.dataVencimentoInicio, 'yyyy-MM-dd')!);
    }

    if (filtro.dataVencimentoFim) {
      params = params.set('DataVencimentoAte', this.datePipe.transform(filtro.dataVencimentoFim, 'yyyy-MM-dd-MM-yyyy')!);
    }
   


    return this.http.get(`${this.API}/lancamentos`,{params});

  

  }

  excluir(codigo: number): Observable<any> {
    return this.http.delete(`${this.API}/lancamentos/${codigo}`);
  }
   
  adicionar(lancamento: Lancamento): Observable<Lancamento> {
   
    return this.http.post<Lancamento>(`${this.API}/lancamentos/`, lancamento);
  
  }

  atualizar(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.put<Lancamento>(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento)

  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
   
    return this.http.get(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then((response:any) => {
       this.converterStringsParaDatas([response]);
        return response;
      });
  }

  private converterStringsParaDatas(lancamentos: any[]) {

    for (const lancamento of lancamentos) {
      
      lancamento.dataVencimento = new Date(lancamento.dataVencimento);

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = new Date(lancamento.dataPagamento); 
      } 
    }

  

}
}