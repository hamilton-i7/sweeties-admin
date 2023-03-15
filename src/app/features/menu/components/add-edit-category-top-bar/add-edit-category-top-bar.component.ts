import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-edit-category-top-bar',
  templateUrl: './add-edit-category-top-bar.component.html',
})
export class AddEditCategoryTopBarComponent {
  @Input() editVariant = false;
  @Input() canDelete = false;
  @Output() closeClick = new EventEmitter<void>();
  @Output() deleteClick = new EventEmitter<void>();
  @Input() loading = false;

  onClose(): void {
    this.closeClick.emit();
  }

  onDelete(): void {
    this.deleteClick.emit();
  }
}
