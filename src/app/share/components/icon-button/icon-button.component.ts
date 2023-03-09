import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Output() btnClick = new EventEmitter<MouseEvent>();

  onClick(): void {
    this.btnClick.emit();
  }
}
