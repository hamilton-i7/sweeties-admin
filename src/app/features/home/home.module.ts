import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../share/share.module';
import { HomeTopBarComponent } from './components/home-top-bar/home-top-bar.component';

@NgModule({
  declarations: [HomeComponent, HomeTopBarComponent],
  imports: [CommonModule, ShareModule],
  exports: [HomeComponent],
})
export class HomeModule {}
