import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPerfilComponent } from './titulo-perfil.component';

describe('TituloPerfilComponent', () => {
  let component: TituloPerfilComponent;
  let fixture: ComponentFixture<TituloPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
