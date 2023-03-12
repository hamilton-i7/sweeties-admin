import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductTopBarComponent } from './add-edit-product-top-bar.component';

describe('AddEditProductTopBarComponent', () => {
  let component: AddEditProductTopBarComponent;
  let fixture: ComponentFixture<AddEditProductTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProductTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProductTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
