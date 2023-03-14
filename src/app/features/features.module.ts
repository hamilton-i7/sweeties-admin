import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  exports: [HomeModule, MenuModule, LoginModule],
})
export class FeaturesModule {}
