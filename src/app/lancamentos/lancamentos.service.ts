import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface LancamentoFiltro {
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  
  constructor(private http: HttpClient) { }

 lancamentosUrl = 'http://localhost:8080/lancamentos';


  pesquisar(filtro:any): Observable<any> {
    let params = new HttpParams();

    //if para filtro por descrição
    if(filtro.descricao){ 
      params = params.set('descricao', filtro.descricao);
    }    
    return this.http.get(`${this.lancamentosUrl}`,{params});
  }

  // pesquisasr(): Promise<any> {
  //   // const headers = new HttpHeaders()
  //   //   .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  //   return this.http.get(`${this.lancamentosUrl}`)
  //     .toPromise()
  //     .then((response: any) => response['content']);
  // }
}
