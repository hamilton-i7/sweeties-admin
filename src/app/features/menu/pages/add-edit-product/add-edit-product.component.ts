import { Component } from '@angular/core';
import { CleaveOptions } from 'cleave.js/options';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent {
  editVariant = false;
  cleaveOptions: CleaveOptions = {
    numeral: true,
    numeralDecimalMark: '.',
    delimiter: ',',
  };

  onClose(): void {}

  onDelete(): void {}
}
