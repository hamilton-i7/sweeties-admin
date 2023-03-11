import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() label = '';
  @Input() placeholder = '';
  @Input() errorMessage = '';
  @Input() error = false;

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
