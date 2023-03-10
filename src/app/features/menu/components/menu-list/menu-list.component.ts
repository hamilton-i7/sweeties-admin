import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ICategory } from '../../../../core/models/category';
import { IProduct } from '../../../../core/models/product';
import { RequestState } from '../../../../core/utils/request';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  menuState$ = new BehaviorSubject<RequestState<Map<ICategory, IProduct[]>>>({
    loading: false,
  });

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
    });
  }

  onCategoryStateChange(category: ICategory, active: boolean): void {
    const updatedCategory: ICategory = {
      ...category,
      active,
      updatedAt: new Date(),
    };
    this.categoryService.updateCategory(updatedCategory);
  }

  onProductStateChange(product: IProduct, active: boolean): void {
    const updatedProduct: IProduct = {
      ...product,
      active,
      updatedAt: new Date(),
    };
    this.productService.updateProduct(updatedProduct);
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

  setupKeysOrder(): number {
    return 0;
  }
}
