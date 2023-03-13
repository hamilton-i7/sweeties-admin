import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CleaveOptions } from 'cleave.js/options';
import { ButtonVariant } from '../../../../share/components/button/button.component';
import { ProductService } from '../../services/product.service';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../../../../core/models/product';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../../../core/models/category';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  editVariant = false;
  cleaveOptions: CleaveOptions = {
    numeral: true,
    numeralDecimalMark: '.',
    delimiter: ',',
  };

  categories$ = new BehaviorSubject<ICategory[]>([]);

  img?: File;
  name = '';
  description: string | null = null;
  price: string | null = null;
  selectedCategory?: ICategory;
  recommended$ = new BehaviorSubject(false);

  enableLiveFeedback = false;
  showDeleteDialog$ = new BehaviorSubject(false);
  showNameError$ = new BehaviorSubject(false);
  showCategoryError$ = new BehaviorSubject(false);
  showImgError$ = new BehaviorSubject(false);

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((state) => {
      this.categories$.next(state.value ?? []);
    });
  }

  onClose(): void {
    this.location.back();
  }

  onDelete(): void {
    this.showDeleteDialog$.next(true);
  }

  onImageChange(file?: File): void {
    this.img = file;
    if (this.enableLiveFeedback) {
      this.showImgError$.next(file === undefined);
    }
  }

  onNameChange(name: string): void {
    this.name = name;
    if (this.enableLiveFeedback) {
      this.showNameError$.next(name.trim().length === 0);
    }
  }

  onDescriptionChange(description: string): void {
    this.description = description;
  }
  onPriceChange(price: string): void {
    this.price = price;
  }

  onCategoryChange(id: string): void {
    this.selectedCategory = this.categories$.value.find(
      (category) => category.id === id
    );
    if (this.enableLiveFeedback) {
      this.showCategoryError$.next(this.selectedCategory === undefined);
    }
  }

  onRecommendedToggle(): void {
    this.recommended$.next(!this.recommended$.value);
  }

  onCancel(): void {
    this.location.back();
  }

  onConfirm(): void {
    if (this.editVariant) {
      this.onUpdate();
      return;
    }
    this.onAdd();
  }

  onAdd(): void {
    if (!this.isValidProduct()) {
      this.enableLiveFeedback = true;
      return;
    }

    const now = new Date();
    const product: IProduct = {
      id: uuidv4(),
      categoryId: this.selectedCategory!.id,
      name: this.name.trim(),
      description: this.description?.trim() ?? null,
      price: this.price,
      active: false,
      recommended: this.recommended$.value,
      imgPath: '',
      imgUrl: '',
      createdAt: now,
      updatedAt: now,
    };

    this.productService.addProduct(product, this.img!).subscribe((state) => {
      if (!state.error) {
        this.location.back();
      }
    });
  }

  onUpdate(): void {
    console.log('UPDATING');
  }

  isValidProduct(): boolean {
    let isValid = true;

    if (!this.img) {
      this.showImgError$.next(true);
      isValid = false;
    }
    if (!this.name.trim()) {
      this.showNameError$.next(true);
      isValid = false;
    }
    if (!this.selectedCategory) {
      this.showCategoryError$.next(true);
      isValid = false;
    }
    return isValid;
  }
}
