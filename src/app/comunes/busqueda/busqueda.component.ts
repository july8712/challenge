import { Component, ElementRef, ViewChild } from '@angular/core';
import { BusquedaService } from '../services/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private busquedasService:BusquedaService){}

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return
    }

    this.busquedasService.buscarPelicula(valor.toLowerCase())
    this.txtBuscar.nativeElement.value = "";
    return false;
  }

}
