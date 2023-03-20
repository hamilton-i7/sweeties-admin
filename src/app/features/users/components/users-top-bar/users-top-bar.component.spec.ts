import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTopBarComponent } from './users-top-bar.component';

describe('UsersTopBarComponent', () => {
  let component: UsersTopBarComponent;
  let fixture: ComponentFixture<UsersTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
