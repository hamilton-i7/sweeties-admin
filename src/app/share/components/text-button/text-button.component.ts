import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
})
export class TextButtonComponent {
  @Input() label = '';
  @Output() btnClick = new EventEmitter();

  @Input() href?: string;

  onClick() {
    this.btnClick.emit();
  }
}
