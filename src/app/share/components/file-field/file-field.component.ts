import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss'],
})
export class FileFieldComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() label = '';
  @Input() errorMessage = '';
  @Input() error = false;

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
