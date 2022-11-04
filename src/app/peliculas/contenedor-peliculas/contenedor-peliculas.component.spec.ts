import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPeliculasComponent } from './contenedor-peliculas.component';

describe('ContenedorPeliculasComponent', () => {
  let component: ContenedorPeliculasComponent;
  let fixture: ComponentFixture<ContenedorPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
