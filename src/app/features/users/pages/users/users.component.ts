import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { IUser, UserRole } from '../../../../core/models/users';
import { ButtonVariant } from '../../../../share/components/button/button.component';
import { AuthService } from '../../../login/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  loading$ = new BehaviorSubject(false);
  isAdmin$ = new BehaviorSubject(false);
  users$ = new BehaviorSubject<IUser[]>([]);

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.authService.currentUser$,
      this.userService.getUsers(),
    ]).subscribe(([authState, usersState]) => {
      this.loading$.next(authState.loading || usersState.loading);
      this.isAdmin$.next(authState.value?.role === UserRole.ADMIN);
      this.users$.next(usersState.value ?? []);
    });
  }
}
