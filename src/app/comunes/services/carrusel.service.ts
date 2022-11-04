import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  // private _busquedaRealizada: string | undefined;


  public resultadosCarrusel:any[] = [];




  constructor( private http: HttpClient ) { }

  mostrarCarrusel(){
    // console.log(this._renderCarrusel);
    this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=2304768cbe84f32466c230e6291b4f3f&language=es-ES&page=1`).subscribe( (resp:any) => {
      this.resultadosCarrusel = resp.results;
    })
  }
}
