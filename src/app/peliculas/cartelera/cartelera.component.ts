import { Component} from '@angular/core';
import { CarruselService } from '../../comunes/services/carrusel.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent{
  constructor(private carruselService:CarruselService) { }

  get resultadosCarrusel(){
    return this.carruselService.resultadosCarrusel.splice(0,5);
  }

  mostrarCartelera() {
    this.carruselService.mostrarCarrusel()
  }

  obtenerUrlImagen(id:string){
    return `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${id}`;
  }

  ngOnInit(): void {
    this.mostrarCartelera();
  }
}
