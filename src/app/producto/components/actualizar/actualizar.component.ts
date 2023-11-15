import { Component, Inject } from '@angular/core';
import { ListaComponent } from '../lista/lista.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductoComponent } from '../../pages/producto/producto.component';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent {

  id: string = '';
  constructor(
    private dialogRef : MatDialogRef<ActualizarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    ) {

  }

  ngOnInit(): void {
    this.id = this.data.id;
    this.getProduct(this.id);
  }

  getProduct(id: any){

  }
}
