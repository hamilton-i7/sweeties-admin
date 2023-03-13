import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
})
export class DeleteProductDialogComponent {
  @Input() show = false;

  @Output() closeClick = new EventEmitter<void>();
  @Output() cancelClick = new EventEmitter<void>();
  @Output() confirmClick = new EventEmitter<void>();

  onClose(): void {
    this.closeClick.emit();
  }

  onCancel(): void {
    this.cancelClick.emit();
  }

  onConfirm(): void {
    this.confirmClick.emit();
  }
}
