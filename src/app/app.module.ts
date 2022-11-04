import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunesModule } from './comunes/comunes.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ComunesModule,
    PeliculasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
