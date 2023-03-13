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
  @Output() valueChange = new EventEmitter<File | undefined>();
  @Input() label = '';
  @Input() buttonLabel = '';
  @Input() errorMessage = '';
  @Input() error = false;

  onValueChange(file?: File): void {
    this.valueChange.emit(file);
  }

  onInputClick(input: HTMLInputElement): void {
    input.click();
  }
}
