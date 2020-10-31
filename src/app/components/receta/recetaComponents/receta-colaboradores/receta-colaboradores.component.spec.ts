import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaColaboradoresComponent } from './receta-colaboradores.component';

describe('RecetaColaboradoresComponent', () => {
  let component: RecetaColaboradoresComponent;
  let fixture: ComponentFixture<RecetaColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaColaboradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
