import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonVariant } from '../button/button.component';

@Component({
  selector: 'app-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss'],
})
export class FileFieldComponent {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() label = '';
  @Input() buttonLabel = '';
  @Input() errorMessage = '';
  @Input() error = false;

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }

  onInputClick(input: HTMLInputElement): void {
    console.log('IT WORKS');
    input.click();
  }
}
