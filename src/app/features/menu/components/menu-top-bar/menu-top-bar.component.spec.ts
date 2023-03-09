import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopBarComponent } from './menu-top-bar.component';

describe('MenuTopBarComponent', () => {
  let component: MenuTopBarComponent;
  let fixture: ComponentFixture<MenuTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
