import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Empresa } from '../core/model';


export class EmpresaFiltro {
  nome?: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private API = environment.apiurl;

  empresaUrl = 'http://localhost:8080/empresa'

  constructor(
    private http: HttpClient,
  ) { }

  pesquisar(filtro: EmpresaFiltro): Observable<any> {
    let params = new HttpParams()

    if(filtro.nome){ 
      params = params.set('nome', filtro.nome);
    }   

    return this.http.get<any>(`${this.API}/empresas`,{params});
  }

  excluir(codigo: number): Observable<any> {
    return this.http.delete(`${this.API}/empresas/${codigo}`);
  }

  adicionar(empresa: Empresa): Observable<Empresa> {
   
    return this.http.post<Empresa>(`${this.API}/empresas/`, empresa);
  
  }

  buscarPorCodigo(codigo: number) : Observable<Empresa>{
   
    return this.http.get<Empresa>(`${this.empresaUrl}/${codigo}`)
  
  }


}
