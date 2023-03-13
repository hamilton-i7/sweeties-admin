import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CleaveOptions } from 'cleave.js/options';
import { ButtonVariant } from '../../../../share/components/button/button.component';
import { ProductService } from '../../services/product.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../../../../core/models/product';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../../../core/models/category';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TITLE_PREFIX } from '../../../../core/constants/common';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  editVariant = false;
  loading$ = new BehaviorSubject(false);
  cleaveOptions: CleaveOptions = {
    numeral: true,
    numeralDecimalMark: '.',
    delimiter: ',',
  };

  categories$ = new BehaviorSubject<ICategory[]>([]);
  product?: IProduct;

  img?: File;
  imgSrc$ = new BehaviorSubject('');
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
    private location: Location,
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (productId) {
      this.editVariant = true;
      combineLatest([
        this.categoryService.getCategories(),
        this.productService.getProduct(productId),
      ]).subscribe(([categoriesState, productState]) => {
        this.loading$.next(categoriesState.loading || productState.loading);
        this.categories$.next(categoriesState.value ?? []);
        this.setupData(productState.value, categoriesState.value ?? []);
      });
      return;
    }

    this.categoryService.getCategories().subscribe((state) => {
      this.loading$.next(state.loading);
      this.categories$.next(state.value ?? []);
    });
  }

  private setupData(
    product: IProduct | undefined,
    categories: ICategory[]
  ): void {
    if (!product) return;

    this.product = product;
    this.imgSrc$.next(product.imgUrl);
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.selectedCategory = categories.find(
      (category) => category.id === product.categoryId
    );
    this.recommended$.next(product.recommended);

    this.title.setTitle(
      this.name ? `${TITLE_PREFIX} | ${this.name}` : TITLE_PREFIX
    );
  }

  onClose(): void {
    this.location.back();
  }

  onDelete(): void {
    this.showDeleteDialog$.next(true);
  }

  onImageChange(file?: File): void {
    this.img = file;

    if (file) {
      this.imgSrc$.next(URL.createObjectURL(file));
    }
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
    if (!this.isValidProduct()) {
      this.enableLiveFeedback = true;
      return;
    }
    if (!this.product) return;

    const now = new Date();
    const product: IProduct = {
      ...this.product,
      categoryId: this.selectedCategory!.id,
      name: this.name.trim(),
      description: this.description?.trim() ?? null,
      price: this.price,
      recommended: this.recommended$.value,
      updatedAt: now,
    };

    this.productService.updateProduct(product, this.img).subscribe((state) => {
      if (!state.error) {
        this.location.back();
      }
    });
  }

  isValidProduct(): boolean {
    let isValid = true;

    if (!this.imgSrc$.value) {
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
