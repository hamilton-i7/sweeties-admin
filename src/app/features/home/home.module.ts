import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../share/share.module';
import { HomeTopBarComponent } from './components/home-top-bar/home-top-bar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientItemComponent } from './components/client-item/client-item.component';
import { NavigationCardComponent } from './components/navigation-card/navigation-card.component';
import { HomeCardsComponent } from './components/home-cards/home-cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    HomeTopBarComponent,
    ClientsComponent,
    ClientItemComponent,
    NavigationCardComponent,
    HomeCardsComponent,
  ],
  imports: [CommonModule, ShareModule, RouterModule],
})
export class HomeModule {}
