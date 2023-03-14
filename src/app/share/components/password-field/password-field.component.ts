import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
})
export class PasswordFieldComponent {
  @Input() password = '';
  @Output() passwordChange = new EventEmitter<string>();
  @Input() error = false;
  @Input() errorMessage = '';

  showPassword$ = new BehaviorSubject(false);

  onPasswordChange(password: string): void {
    this.passwordChange.emit(password);
  }

  onShowPasswordToggle(): void {
    this.showPassword$.next(!this.showPassword$.value);
  }
}
