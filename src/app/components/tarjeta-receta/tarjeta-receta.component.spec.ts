import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRecetaComponent } from './tarjeta-receta.component';

describe('TarjetaRecetaComponent', () => {
  let component: TarjetaRecetaComponent;
  let fixture: ComponentFixture<TarjetaRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
