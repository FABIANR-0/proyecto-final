import { TokenInterface } from './../interface/token-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterface } from './../interface/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http  : HttpClient) { }

  baseUrl = "https://backappclo.azurewebsites.net/auth/";

  getToken ( informacion : any) {
    //console.log(informacion)
    return this.http.post<TokenInterface>(`${this.baseUrl}`, informacion);
  }
}
