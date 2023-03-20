import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShareModule } from '../../share/share.module';
import { ProfileTopBarComponent } from './components/profile-top-bar/profile-top-bar.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersTopBarComponent } from './components/users-top-bar/users-top-bar.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileTopBarComponent,
    UsersComponent,
    UsersTopBarComponent,
    UserItemComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse' }),
  ],
})
export class UserModule {}
