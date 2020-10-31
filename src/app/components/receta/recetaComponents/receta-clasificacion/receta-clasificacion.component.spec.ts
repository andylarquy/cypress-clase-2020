import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaClasificacionComponent } from './receta-clasificacion.component';

describe('RecetaClasificacionComponent', () => {
  let component: RecetaClasificacionComponent;
  let fixture: ComponentFixture<RecetaClasificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaClasificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
