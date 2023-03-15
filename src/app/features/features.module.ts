import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';
import { UserModule } from './users/user.module';

@NgModule({
  exports: [HomeModule, MenuModule, LoginModule, UserModule],
})
export class FeaturesModule {}
