import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ShareModule } from '../../share/share.module';
import { LoginTopBarComponent } from './components/login-top-bar/login-top-bar.component';

@NgModule({
  declarations: [LoginComponent, LoginTopBarComponent],
  imports: [CommonModule, LoginRoutingModule, ShareModule],
})
export class LoginModule {}
