import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

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
    private datePipe: DatePipe
  ) { }

  pesquisar(filtro: PessoaFiltro): Observable<any> {
    let params = new HttpParams()

    if(filtro.nome){ 
      params = params.set('nome', filtro.nome);
    }   

    return this.http.get<any>(`${this.API}/pessoas`,{params});
  }
  
}




