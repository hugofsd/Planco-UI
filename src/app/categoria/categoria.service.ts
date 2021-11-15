import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../core/model';


export class CategoriaFiltro {
  name?: string;
  codigo?: number;
}
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {




  private API = environment.apiurl;

  categoriaUrl = 'http://localhost:8080/categorias'
  constructor(
    private http: HttpClient,
  ) { }


  
  pesquisar(filtro: CategoriaFiltro): Observable<any> {
    let params = new HttpParams()

    if(filtro.name){ 
      params = params.set('name', filtro.name);
    }   

    if(filtro.codigo){ 
      params = params.set('codigo', filtro.codigo);
    }

    return this.http.get(`${this.API}/categorias`,{params});
  }

  
  excluir(codigo: number): Observable<any> {
    return this.http.delete(`${this.API}/categorias/${codigo}`);
  }

  adicionar(categoria: Categoria): Observable<Categoria> {
   
    return this.http.post<Categoria>(`${this.API}/categorias/`, categoria);
  
  }

  buscarPorCodigo(codigo: number) : Observable<Categoria>{
   
    return this.http.get<Categoria>(`${this.categoriaUrl}/${codigo}`)
  
  }

}
