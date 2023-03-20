import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss'],
})
export class ProductImageComponent {
  @Input() image = '';
  @Output() valueChange = new EventEmitter<File | undefined>();
  @Input() errorMessage = '';
  @Input() error = false;
  @Input() loading = false;

  onValueChange(file?: File): void {
    this.valueChange.emit(file);
  }
}
