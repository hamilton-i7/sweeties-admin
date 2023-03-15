import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  @Input() label = '';
  @Output() btnClick = new EventEmitter();
  @Input() variant: ButtonVariant = ButtonVariant.FILLED;
  @Input() disabled = false;
  @Input() href?: string;
  @Input() fullWidth = false;

  onClick(): void {
    if (this.disabled) return;
    this.btnClick.emit();
  }
}

export enum ButtonVariant {
  FILLED,
  TONAL,
  OUTLINED,
  TEXT,
}
