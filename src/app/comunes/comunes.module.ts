import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    FooterComponent
  ],
  exports: [
    BusquedaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComunesModule { }
