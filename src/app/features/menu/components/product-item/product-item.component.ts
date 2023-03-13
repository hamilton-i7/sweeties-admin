import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../core/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product?: IProduct;
  @Input() active = false;
  @Output() activeChange = new EventEmitter<boolean>();

  onActiveToggle(active: boolean) {
    this.activeChange.emit(active);
  }
}
