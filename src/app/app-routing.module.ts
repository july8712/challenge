import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './comunes/busqueda/busqueda.component';
import { ContenedorPeliculasComponent } from './peliculas/contenedor-peliculas/contenedor-peliculas.component';
import { PeliculaComponent } from './peliculas/pelicula/pelicula.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [

  {path: 'home', component: ContenedorPeliculasComponent},
  {path: 'buscar/:texto', component: BusquedaComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},

  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', pathMatch: 'full', redirectTo: '/home'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
