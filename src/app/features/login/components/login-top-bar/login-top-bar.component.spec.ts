import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTopBarComponent } from './login-top-bar.component';

describe('LoginTopBarComponent', () => {
  let component: LoginTopBarComponent;
  let fixture: ComponentFixture<LoginTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
