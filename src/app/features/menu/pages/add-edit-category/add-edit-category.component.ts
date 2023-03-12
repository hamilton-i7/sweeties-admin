import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../../../core/models/category';
import { ButtonVariant } from '../../../../share/components/button/button.component';
import { CategoryService } from '../../services/category.service';
import { v4 as uuidv4 } from 'uuid';
import { Title } from '@angular/platform-browser';
import { TITLE_PREFIX } from '../../../../core/constants/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss'],
})
export class AddEditCategoryComponent implements OnInit {
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  name = '';
  editVariant = false;
  loading$ = new BehaviorSubject(false);
  category?: ICategory;
  showDeleteDialog$ = new BehaviorSubject(false);

  constructor(
    private location: Location,
    private categoryService: CategoryService,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!categoryId) return;

    this.editVariant = true;
    this.categoryService.getCategory(categoryId).subscribe((state) => {
      if (state.loading) {
        this.loading$.next(true);
        return;
      }

      this.setupData(state.value);
      this.loading$.next(false);
    });
  }

  private setupData(category?: ICategory): void {
    if (!category) return;

    this.category = category;
    this.name = category.name;
    this.title.setTitle(
      this.name ? `${TITLE_PREFIX} | ${this.name}` : TITLE_PREFIX
    );
  }

  onClose(): void {
    this.location.back();
  }

  onCloseDialog(): void {
    this.showDeleteDialog$.next(false);
  }

  onDelete(): void {
    this.showDeleteDialog$.next(true);
  }

  onDeleteConfirm(): void {
    if (!this.category) return;

    this.categoryService.deleteCategory(this.category.id).subscribe((state) => {
      this.loading$.next(state.loading);

      if (!state.loading && !state.error) {
        this.router.navigate(['/menu'], { replaceUrl: true });
      }
    });
  }

  onNameChange(name: string): void {
    this.name = name;
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
    if (!this.isValidName()) return;

    const now = new Date();
    const category: ICategory = {
      id: uuidv4(),
      name: this.name,
      active: false,
      createdAt: now,
      updatedAt: now,
    };

    this.categoryService.addCategory(category).subscribe((state) => {
      if (!state.error) {
        this.location.back();
      }
    });
  }

  onUpdate(): void {
    if (!this.isValidName()) return;
    if (!this.category) return;

    const now = new Date();
    const category: ICategory = {
      ...this.category,
      name: this.name,
      updatedAt: now,
    };

    this.categoryService.updateCategory(category).subscribe((state) => {
      if (!state.error) {
        this.location.back();
      }
    });
  }

  isValidName(): boolean {
    if (this.name.trim().length === 0) {
      return false;
    }
    return true;
  }
}
