import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  public resultadosPelicula:any[] = [];


  constructor(private http: HttpClient) { }

  mostrarPelicula(){
    // console.log(this._renderCarrusel);
    this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=2304768cbe84f32466c230e6291b4f3f&language=es-ES&page=1`).subscribe( (resp:any) => {
      this.resultadosPelicula = resp.results;
    })
  }
}
