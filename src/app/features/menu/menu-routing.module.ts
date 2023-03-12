import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './pages/add-edit-category/add-edit-category.component';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: 'menu/category/:id',
    component: AddEditCategoryComponent,
  },
  {
    path: 'menu/add-category',
    component: AddEditCategoryComponent,
    title: 'Agregar Categoría',
  },
  {
    path: 'menu/add-product',
    component: AddEditProductComponent,
    title: 'Agregar Producto',
  },
  { path: 'menu', component: MenuComponent, title: 'Menú' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
