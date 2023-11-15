import { Component, Input } from '@angular/core';
import { ServiceService } from '../../service.service';

import Swal from 'sweetalert2';
import { ProductoComponent } from '../../pages/producto/producto.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  constructor(private service : ServiceService, private product : ProductoComponent){}

  @Input() productData: any = {};

  ngOnChanges(){
  }
  edit(id: any){
    this.service.getOne(id).subscribe(
      (res:any)=>{
        const product = res;
        console.log(product)
      }
    );
  }

  delete(id:any){
    Swal.fire({
      title: '¿Estás seguro de borrar este articulo?',
      text: '¡Esto no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.product.eliminar(id);
        Swal.fire('Borrado', 'El elemento ha sido borrado', 'success');
      }
    });
  }
}
