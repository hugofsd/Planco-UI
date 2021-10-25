import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private API = environment.apiurl;

  constructor(
    private http: HttpClient
  ) { }



  // pesquisar(): Promise<any>{
  //   this.http.get<any>(`${this.API}/lancamentos`);
  // }
}
