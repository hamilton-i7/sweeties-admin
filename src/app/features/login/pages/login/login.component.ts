import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EMAIL_REGEX } from '../../../../core/constants/email';
import {
  EMPTY,
  INVALID_EMAIL,
  SHORT_PASSWORD,
} from '../../../../core/constants/errors';
import { ButtonVariant } from '../../../../share/components/button/button.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;
  private static MIN_PASSWORD_LENGTH = 6;

  constructor(private authService: AuthService, private router: Router) {}

  email = '';
  emailErrorMessage$ = new BehaviorSubject('');

  password = '';
  passwordErrorMessage$ = new BehaviorSubject('');

  enableLiveFeedback = false;

  onEmailChange(email: string): void {
    this.email = email;
    if (!this.enableLiveFeedback) return;

    if (this.email.trim().length === 0) {
      this.emailErrorMessage$.next(EMPTY);
      return;
    }
    if (!EMAIL_REGEX.test(this.email.trim())) {
      this.emailErrorMessage$.next(INVALID_EMAIL);
      return;
    }
    this.emailErrorMessage$.next('');
  }

  onPasswordChange(password: string): void {
    this.password = password;
    if (!this.enableLiveFeedback) return;

    if (this.password.trim().length === 0) {
      this.passwordErrorMessage$.next(EMPTY);
      return;
    }
    if (this.password.trim().length < LoginComponent.MIN_PASSWORD_LENGTH) {
      this.passwordErrorMessage$.next(SHORT_PASSWORD);
      return;
    }
    this.passwordErrorMessage$.next('');
  }

  onLogin(): void {
    if (!this.isValidForm()) {
      this.enableLiveFeedback = true;
      return;
    }
    this.authService.login(this.email, this.password).subscribe((state) => {
      if (!state.loading && !state.error) {
        this.router.navigate(['/home']);
      }
    });
  }

  isValidForm(): boolean {
    let isValid = true;

    if (this.email.trim().length === 0) {
      this.emailErrorMessage$.next(EMPTY);
      isValid = false;
    } else if (!EMAIL_REGEX.test(this.email.trim())) {
      this.emailErrorMessage$.next(INVALID_EMAIL);
      isValid = false;
    }

    if (this.password.trim().length === 0) {
      this.passwordErrorMessage$.next(EMPTY);
      isValid = false;
    } else if (
      this.password.trim().length < LoginComponent.MIN_PASSWORD_LENGTH
    ) {
      this.passwordErrorMessage$.next(SHORT_PASSWORD);
      isValid = false;
    }
    return isValid;
  }
}
