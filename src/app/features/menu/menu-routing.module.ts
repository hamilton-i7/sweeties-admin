import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './pages/add-edit-category/add-edit-category.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent, title: 'Sweeties672 | Menú' },
  {
    path: 'menu/add-category',
    component: AddEditCategoryComponent,
    title: 'Sweeties672 | Agregar Categoría',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
