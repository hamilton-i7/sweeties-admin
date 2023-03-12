import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-category-dialog',
  templateUrl: './delete-category-dialog.component.html',
  styleUrls: ['./delete-category-dialog.component.scss'],
})
export class DeleteCategoryDialogComponent {
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
