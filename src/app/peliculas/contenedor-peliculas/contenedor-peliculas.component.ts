import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../comunes/services/busqueda.service';


@Component({
  selector: 'app-contenedor-peliculas',
  templateUrl: './contenedor-peliculas.component.html',
  styleUrls: ['./contenedor-peliculas.component.scss']
})
export class ContenedorPeliculasComponent implements OnInit {

  get valor(){
    return this.busquedaService.busquedaRealizada;
  }

  get resultados() {
    return this.busquedaService.resultados;
  }



  constructor(private busquedaService:BusquedaService) { }

  ngOnInit(): void {
  }

}
