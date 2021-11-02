import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private API = environment.apiurl;

  constructor(
    private http: HttpClient,
  ) { }


  listarCategorias(): Observable<any>  {
      return this.http.get<any>(`${this.API}/categorias`);
  }
  
}
