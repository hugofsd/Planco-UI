import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { Pessoa } from '../core/model';

export class PessoaFiltro {
  nome?: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private API = environment.apiurl;
  
  constructor(
    private http: HttpClient,
  ) { }

  pesquisar(filtro: PessoaFiltro): Observable<any> {
    let params = new HttpParams()

    if(filtro.nome){ 
      params = params.set('nome', filtro.nome);
    }   

    return this.http.get<any>(`${this.API}/pessoas`,{params});
  }

  excluir(codigo: number): Observable<any> {
    return this.http.delete(`${this.API}/pessoas/${codigo}`);
  }


  mudarStatus(codigo: number, ativo: boolean):  Promise<void> {
    return this.http.put<void>(`${this.API}/pessoas/${codigo}/ativo`, ativo)
    .toPromise();
  }


  adicionar(pessoa: Pessoa): Observable<Pessoa> {
   
    return this.http.post<Pessoa>(`${this.API}/pessoas/`, pessoa);
  
  }
  
}




