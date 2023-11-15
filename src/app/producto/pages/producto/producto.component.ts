import { ProductoInterface } from './../../../interface/producto-interface';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private service : ServiceService){}

  elementos :  ProductoInterface[] = [];

  ngOnInit() : void{
    if(this.elementos.length>0){
    }else{
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


  }

  agregar(){
    this.elementos.push()
  }

  eliminar(id:any){
    this.elementos = this.elementos.filter(objeto => objeto.id !== id);
  }
}
