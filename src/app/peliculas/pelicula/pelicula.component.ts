import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/comunes/services/pelicula.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  constructor(private peliculaService:PeliculaService){}

  get resultadosPelicula(){
    return this.peliculaService.resultadosPelicula;
  }

  mostrarPelicula() {
    this.peliculaService.mostrarPelicula;
  }

  ngOnInit(): void {
    this.mostrarPelicula();
  }

}
