import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ActorComponent } from './actor/actor.component';
import { ContenedorPeliculasComponent } from './contenedor-peliculas/contenedor-peliculas.component';
import { CarteleraComponent } from './cartelera/cartelera.component';



@NgModule({
  declarations: [
    PeliculaComponent,
    ActorComponent,
    ContenedorPeliculasComponent,
    CarteleraComponent
  ],exports: [
    ContenedorPeliculasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeliculasModule { }
