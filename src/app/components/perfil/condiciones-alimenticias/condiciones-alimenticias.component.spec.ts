import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesAlimenticiasComponent } from './condiciones-alimenticias.component';

describe('CondicionesAlimenticiasComponent', () => {
  let component: CondicionesAlimenticiasComponent;
  let fixture: ComponentFixture<CondicionesAlimenticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesAlimenticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesAlimenticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
