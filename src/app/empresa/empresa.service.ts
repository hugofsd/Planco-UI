import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Empresa } from '../core/model';


export class EmpresaFiltro {
  nome?: string;
  codigo?: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private API = environment.apiurl;

  empresaUrl = 'http://localhost:8080/empresas'

  constructor(
    private http: HttpClient,
  ) { }

  pesquisar(filtro: EmpresaFiltro): Observable<any> {
    let params = new HttpParams()

    if(filtro.nome){ 
      params = params.set('nome', filtro.nome);
    }   

    if(filtro.codigo){ 
      params = params.set('codigo', filtro.codigo);
    }

    return this.http.get(`${this.API}/empresas`,{params});
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

  mudarStatus(codigo: number, ativo: boolean):  Promise<void> {
    return this.http.put<void>(`${this.API}/empresas/${codigo}/ativo`, ativo)
    .toPromise();
  }



}
