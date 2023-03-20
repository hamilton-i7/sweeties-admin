import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../../core/models/users';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent {
  @Input() user?: IUser;
  @Output() activeChange = new EventEmitter<boolean>();
  @Input() loading = false;

  onActiveStateChange(active: boolean): void {
    this.activeChange.emit(active);
  }
}
