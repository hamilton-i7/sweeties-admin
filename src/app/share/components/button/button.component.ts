import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label = '';
  @Output() btnClick = new EventEmitter();
  @Input() variant: ButtonVariant = ButtonVariant.FILLED;
  variantClass = '';

  @Input() href?: string;

  ngOnInit(): void {
    this.setupVariantClass();
  }

  onClick(): void {
    this.btnClick.emit();
  }

  setupVariantClass(): void {
    switch (this.variant) {
      case ButtonVariant.FILLED:
        this.variantClass = 'button--filled';
        break;
      case ButtonVariant.TONAL:
        this.variantClass = 'button--tonal';
        break;
      case ButtonVariant.OUTLINED:
        this.variantClass = 'button--outlined';
        break;
      case ButtonVariant.TEXT:
        this.variantClass = 'button--text';
        break;
    }
  }
}

export enum ButtonVariant {
  FILLED,
  TONAL,
  OUTLINED,
  TEXT,
}
