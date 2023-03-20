import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-edit-product-top-bar',
  templateUrl: './add-edit-product-top-bar.component.html',
})
export class AddEditProductTopBarComponent {
  @Input() editVariant = false;
  @Output() closeClick = new EventEmitter<void>();
  @Output() deleteClick = new EventEmitter<void>();
  @Input() canDelete = false;
  @Input() loading = false;

  onClose(): void {
    this.closeClick.emit();
  }

  onDelete(): void {
    this.deleteClick.emit();
  }
}
