import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CleaveOptions } from 'cleave.js/options';

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
  @Input() options: CleaveOptions = {};
  @Input() selectOptions: unknown[] = [];
  @Input() variant: 'singleline' | 'multiline' | 'select' = 'singleline';

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
