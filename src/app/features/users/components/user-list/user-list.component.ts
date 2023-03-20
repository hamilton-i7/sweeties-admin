import { Component, Input } from '@angular/core';
import { IUser, UserRole } from '../../../../core/models/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() users: IUser[] = [];
  @Input() loading = false;
  @Input() canDelete = false;

  dummyUsers: IUser[] = [
    {
      email: 'john.doe@example.com',
      name: 'John',
      lastName: 'Doe',
      role: UserRole.ADMIN,
      active: true,
      imgPath: '',
      imgUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'janine.doe@example.com',
      name: 'Janine',
      lastName: 'Doe',
      role: UserRole.AUTHOR,
      active: false,
      imgPath: '',
      imgUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'kevin.doe@example.com',
      name: 'Kevin',
      lastName: 'Doe',
      role: UserRole.EDITOR,
      active: true,
      imgPath: '',
      imgUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'michaela.doe@example.com',
      name: 'Michaela',
      lastName: 'Doe',
      role: UserRole.ADMIN,
      active: false,
      imgPath: '',
      imgUrl: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}
