import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopBarComponent } from './home-top-bar.component';

describe('HomeTopBarComponent', () => {
  let component: HomeTopBarComponent;
  let fixture: ComponentFixture<HomeTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
