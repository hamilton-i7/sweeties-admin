import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShareModule } from '../../share/share.module';
import { ProfileTopBarComponent } from './components/profile-top-bar/profile-top-bar.component';

@NgModule({
  declarations: [ProfileComponent, ProfileTopBarComponent],
  imports: [CommonModule, UserRoutingModule, ShareModule],
})
export class UserModule {}
