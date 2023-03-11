import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCategoryTopBarComponent } from './add-edit-category-top-bar.component';

describe('AddEditCategoryTopBarComponent', () => {
  let component: AddEditCategoryTopBarComponent;
  let fixture: ComponentFixture<AddEditCategoryTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCategoryTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCategoryTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
