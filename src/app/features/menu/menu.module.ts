import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuTopBarComponent } from './components/menu-top-bar/menu-top-bar.component';
import { ShareModule } from '../../share/share.module';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

@NgModule({
  declarations: [MenuComponent, MenuTopBarComponent, CategoryItemComponent, ProductItemComponent, MenuListComponent],
  imports: [CommonModule, MenuRoutingModule, ShareModule],
  exports: [MenuComponent],
})
export class MenuModule {}
