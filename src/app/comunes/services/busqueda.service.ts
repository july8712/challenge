import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private _busquedaRealizada: string | undefined;

  public resultados:any[] = [];


  get busquedaRealizada() {
    return this._busquedaRealizada;
  }

  constructor( private http: HttpClient){ }

  buscarPelicula( termino: string){
    this._busquedaRealizada = termino;
    console.log(this._busquedaRealizada, "_busquedaRealizada");
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=2304768cbe84f32466c230e6291b4f3f&query=${termino}&language=es-ES&page=1`).subscribe( (resp:any) => {
      console.log(resp.results, "results");

      this.resultados = resp.results;
    })
  }

}
