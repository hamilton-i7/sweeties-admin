import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ICategory } from '../../../../core/models/category';
import { IProduct } from '../../../../core/models/product';
import { RequestState } from '../../../../core/utils/request';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { findCategory } from '../../utils/category';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  private static TOGGLE_DELAY_MS = 250;

  menuState$ = new BehaviorSubject<RequestState<Map<ICategory, IProduct[]>>>({
    loading: false,
  });
  activeStates$ = new BehaviorSubject<Map<string, boolean>>(new Map());

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    combineLatest([
      this.categoryService.getCategories(),
      this.productService.getProducts(),
    ]).subscribe(([categoriesState, productsState]) => {
      this.menuState$.next({
        loading: categoriesState.loading || productsState.loading,
      });

      if (!categoriesState.value || !productsState.value) return;
      this.setupMenuMap(categoriesState.value, productsState.value);
      this.setupActiveStatesMap(categoriesState.value, productsState.value);
    });
  }

  onCategoryStateChange(category: ICategory, active: boolean): void {
    this.updateActiveStatesMap(category.id, active);

    setTimeout(() => {
      const updatedCategory: ICategory = {
        ...category,
        active,
        updatedAt: new Date(),
      };
      this.categoryService.updateCategory(updatedCategory);
    }, MenuListComponent.TOGGLE_DELAY_MS);
  }

  onProductStateChange(product: IProduct, active: boolean): void {
    const category = findCategory(this.getCategories(), product.categoryId);
    if (!category) return;

    this.updateActiveStatesMap(product.id, active);
    if (this.isFirstActive(category) || this.isLastActive(category)) {
      this.updateActiveStatesMap(category.id, active);

      setTimeout(() => {
        const updatedProduct: IProduct = {
          ...product,
          active,
          updatedAt: new Date(),
        };
        const updatedCategory: ICategory = {
          ...category,
          active,
          updatedAt: new Date(),
        };
        combineLatest([
          this.categoryService.updateCategory(updatedCategory),
          this.productService.updateProduct(updatedProduct),
        ]);
      }, MenuListComponent.TOGGLE_DELAY_MS);
      return;
    }

    setTimeout(() => {
      const updatedProduct: IProduct = {
        ...product,
        active,
        updatedAt: new Date(),
      };
      this.productService.updateProduct(updatedProduct);
    }, MenuListComponent.TOGGLE_DELAY_MS);
  }

  private updateActiveStatesMap(id: string, active: boolean): void {
    const result = this.activeStates$.value;
    result.set(id, active);
    this.activeStates$.next(result);
  }

  private getCategories(): ICategory[] {
    return [...(this.menuState$.value.value?.keys() ?? [])];
  }

  private isFirstActive(category: ICategory): boolean {
    const products = this.menuState$.value.value?.get(category) ?? [];
    return products.filter((product) => product.active).length === 0;
  }

  isLastActive(category: ICategory): boolean {
    const products = this.menuState$.value.value?.get(category) ?? [];
    return products.filter((product) => product.active).length === 1;
  }

  setupMenuMap(categories: ICategory[], products: IProduct[]): void {
    const result: Map<ICategory, IProduct[]> = new Map();

    categories.forEach((category) => {
      result.set(
        category,
        products.filter((product) => product.categoryId === category.id)
      );
    });
    this.menuState$.next({ loading: false, value: result });
  }

  setupActiveStatesMap(categories: ICategory[], products: IProduct[]): void {
    const result: Map<string, boolean> = new Map();
    categories.forEach((category) => result.set(category.id, category.active));
    products.forEach((product) => result.set(product.id, product.active));
    this.activeStates$.next(result);
  }

  setupKeysOrder(): number {
    return 0;
  }
}
