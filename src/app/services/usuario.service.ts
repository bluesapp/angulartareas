import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // url = 'https://gorest.co.in/public-api/users';
  url = 'https://reqres.in/api/users';
  apiUsers = '?page=2';
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url + this.apiUsers);
  }
  // getUsuarios(): Observable<any>{
  //   return this.http.get<any>(this.url + '?access-token=' + this.token);
  // }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id );
  }
}
