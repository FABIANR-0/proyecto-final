import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { HeaderComponent } from 'src/app/public/header/header.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private service : ServiceService){}

  elementos :  ProductoInterface[] = [];

  ngOnInit() : void{
      this.service.getAll().subscribe(
        (res :any)=>{
          this.elementos = res;
        } ,
        (ERR :any)=> {
          console.log("error");
        },
        ()=>{
          console.log("finis");
        }

      );
  }

  agregar(){
    this.elementos.push()
  }

  eliminar(id:any){
    this.elementos = this.elementos.filter(objeto => objeto.id !== id);
  }

  getToken(){
    return localStorage.getItem('token_auth');
  }

  getOne(id:any){
    return this.elementos.filter(objeto => objeto.id ===id)
  }
}
