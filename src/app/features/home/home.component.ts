import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../core/models/users';
import { ButtonVariant } from '../../share/components/button/button.component';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  user$ = new BehaviorSubject<IUser | undefined>(undefined);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      this.user$.next(user);
    });
  }
}
