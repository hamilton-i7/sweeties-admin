import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  exports: [HomeModule, MenuModule],
})
export class FeaturesModule {}
