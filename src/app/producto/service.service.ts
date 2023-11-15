import { ProductoInterface } from './../interface/producto-interface';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) {}

  baseUrl = environment.api +"/products";
  data = this.http.get(this.baseUrl);

  getAll() : Observable<any>{
    return  this.data
  }

  getOne(id : string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  postProducto(){

  }

  putProducto(){

  }

  deleteProducto(id : string){
    
  }


}
