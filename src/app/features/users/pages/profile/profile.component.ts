import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../../../core/models/users';
import { ButtonVariant } from '../../../../share/components/button/button.component';
import { AuthService } from '../../../login/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  name = '';
  nameErrorMessage$ = new BehaviorSubject('');

  lastName = '';
  lastNameErrorMessage$ = new BehaviorSubject('');

  email = '';

  enableLiveFeedback = false;
  loading$ = new BehaviorSubject(false);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((state) => {
      this.loading$.next(state.loading);
      if (state.loading) return;
      if (state.error) return;

      this.setupData(state.value);
    });
  }

  private setupData(user: IUser | undefined) {
    if (!user) return;
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
  }

  onNameChange(name: string): void {
    this.name = name;
  }

  onLastNameChange(lastName: string): void {
    this.lastName = lastName;
  }

  onSave(): void {
    console.log('SAVING CHANGES');
  }

  onLogout(): void {
    console.log('LOGGING OUT');
  }
}
