import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorTituloComponent } from './contenedor-titulo.component';

describe('ContenedorTituloComponent', () => {
  let component: ContenedorTituloComponent;
  let fixture: ComponentFixture<ContenedorTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
