import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { doesNotReject } from 'assert';
import { AppRoutingModule, routingComponents } from 'src/app/app-routing.module';
import { LoginService } from 'src/app/services/login.service';
import { StubLoginService } from 'src/app/services/stub.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, routingComponents],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
      ],
    }).compileComponents()

    TestBed.overrideComponent(LoginComponent, {
      set: {
        providers: [
          { provide: LoginService, useClass: StubLoginService },
        ]
      }
    })

    fixture = TestBed.createComponent(LoginComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Ingreso de un usuario`, () => {
    const testingUsername = 'usuario1'
    const testingPassword = '12345'
    component.username = testingUsername
    component.password = testingPassword
    
    const stublogin = new StubLoginService()
    const compiled = fixture.debugElement.nativeElement

    const usuarioIngresado = stublogin.chequearIngreso(testingUsername,testingPassword)
    compiled.querySelector(`[data-testid="ingresar"]`).click()
    
    fixture.detectChanges()
    expect(usuarioIngresado.id).toEqual(1)
  });

  
});
