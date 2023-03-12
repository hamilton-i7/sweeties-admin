import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuTopBarComponent } from './components/menu-top-bar/menu-top-bar.component';
import { ShareModule } from '../../share/share.module';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AddEditCategoryComponent } from './pages/add-edit-category/add-edit-category.component';
import { AddEditCategoryTopBarComponent } from './components/add-edit-category-top-bar/add-edit-category-top-bar.component';
import { TitleStrategy } from '@angular/router';
import { AppTitlePrefix } from '../../core/injectables/app-title-prefix';
import { DeleteCategoryDialogComponent } from './components/delete-category-dialog/delete-category-dialog.component';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';
import { AddEditProductTopBarComponent } from './components/add-edit-product-top-bar/add-edit-product-top-bar.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuTopBarComponent,
    CategoryItemComponent,
    ProductItemComponent,
    MenuListComponent,
    AddEditCategoryComponent,
    AddEditCategoryTopBarComponent,
    DeleteCategoryDialogComponent,
    AddEditProductComponent,
    AddEditProductTopBarComponent,
  ],
  imports: [CommonModule, MenuRoutingModule, ShareModule],
  exports: [MenuComponent],
  providers: [{ provide: TitleStrategy, useClass: AppTitlePrefix }],
})
export class MenuModule {}
