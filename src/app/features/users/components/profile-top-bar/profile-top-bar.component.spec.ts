import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTopBarComponent } from './profile-top-bar.component';

describe('ProfileTopBarComponent', () => {
  let component: ProfileTopBarComponent;
  let fixture: ComponentFixture<ProfileTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
