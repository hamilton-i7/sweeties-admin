import { Component, Input } from '@angular/core';
import { UserRole } from '../../../../core/models/users';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss'],
})
export class HomeCardsComponent {
  @Input() role?: UserRole;

  isAuthorized(): boolean {
    return this.role === UserRole.ADMIN || this.role === UserRole.AUTHOR;
  }
}
