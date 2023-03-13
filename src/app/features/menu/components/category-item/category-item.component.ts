import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../../core/models/category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {
  @Input() category?: ICategory;
  @Input() active = false;
  @Output() activeChange = new EventEmitter<boolean>();

  onActiveToggle(active: boolean) {
    this.activeChange.emit(active);
  }
}
