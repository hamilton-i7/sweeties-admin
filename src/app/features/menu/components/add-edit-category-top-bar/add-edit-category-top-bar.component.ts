import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-edit-category-top-bar',
  templateUrl: './add-edit-category-top-bar.component.html',
  styleUrls: ['./add-edit-category-top-bar.component.scss'],
})
export class AddEditCategoryTopBarComponent {
  @Input() editVariant = false;
  @Output() closeClick = new EventEmitter<void>();
  @Output() deleteClick = new EventEmitter<void>();

  onClose(): void {
    this.closeClick.emit();
  }

  onDelete(): void {
    this.deleteClick.emit();
  }
}
