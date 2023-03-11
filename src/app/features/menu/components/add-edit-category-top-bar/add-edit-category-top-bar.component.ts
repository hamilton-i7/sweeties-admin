import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit-category-top-bar',
  templateUrl: './add-edit-category-top-bar.component.html',
  styleUrls: ['./add-edit-category-top-bar.component.scss'],
})
export class AddEditCategoryTopBarComponent {
  constructor(private location: Location) {}

  onClose(): void {
    this.location.back();
  }
}
