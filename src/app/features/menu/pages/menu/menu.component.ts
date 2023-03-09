import { Component } from '@angular/core';
import { ICategory } from '../../../../core/models/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  category: ICategory = {
    id: '000',
    name: 'Batidos',
    active: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
