import { Component } from '@angular/core';
import { CleaveOptions } from 'cleave.js/options';
import { ButtonVariant } from '../../../../share/components/button/button.component';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  editVariant = false;
  cleaveOptions: CleaveOptions = {
    numeral: true,
    numeralDecimalMark: '.',
    delimiter: ',',
  };
  name = '';
  description: string | null = null;
  price: string | null = null;
  category = '';

  onClose(): void {}

  onDelete(): void {}

  onDescriptionChange(description: string): void {
    this.description = description;
  }

  onNameChange(name: string): void {
    this.name = name;
  }

  onPriceChange(price: string): void {
    this.price = price;
  }

  onCategoryChange(category: string): void {
    this.category = category;
  }
}
