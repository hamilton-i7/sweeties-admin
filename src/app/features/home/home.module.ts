import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../share/share.module';
import { HomeTopBarComponent } from './components/home-top-bar/home-top-bar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientItemComponent } from './components/client-item/client-item.component';

@NgModule({
  declarations: [HomeComponent, HomeTopBarComponent, ClientsComponent, ClientItemComponent],
  imports: [CommonModule, ShareModule],
  exports: [HomeComponent],
})
export class HomeModule {}
