import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaRecetasComponent } from './busqueda-recetas.component';

describe('BusquedaRecetasComponent', () => {
  let component: BusquedaRecetasComponent;
  let fixture: ComponentFixture<BusquedaRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
