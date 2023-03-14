import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './pages/add-edit-category/add-edit-category.component';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';
import { MenuComponent } from './pages/menu/menu.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'menu/category/:id',
    component: AddEditCategoryComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'menu/add-category',
    component: AddEditCategoryComponent,
    title: 'Agregar Categoría',
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'menu/add-product',
    component: AddEditProductComponent,
    title: 'Agregar Producto',
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'menu/product/:id',
    component: AddEditProductComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menú',
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
