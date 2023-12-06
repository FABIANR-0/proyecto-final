import { ProductoInterface } from './../interface/producto-interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) {}

  baseUrl = "https://backappclo.azurewebsites.net/product";

  getAll() : Observable<any>{
    const idUser = localStorage.getItem('id_user');
    return this.http.get(`${this.baseUrl}/all/${idUser}`)
  }

  getOne(id : string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  postProducto(data : any):Observable<any>{
    return this.http.post(this.baseUrl, data)
  }

  putProducto(id: any, data: any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, data)
  }

  deleteProducto(id : string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

}
