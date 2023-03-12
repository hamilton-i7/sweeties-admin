import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CANCEL, CONFIRM } from '../../../core/constants/common';
import { ButtonVariant } from '../button/button.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  @Input() show = false;
  @Input() headline = '';
  @Input() text = '';
  @Input() cancelText = CANCEL;
  @Input() confirmText = CONFIRM;
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
