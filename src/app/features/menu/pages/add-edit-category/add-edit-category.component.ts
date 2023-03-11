import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../../../core/models/category';
import { ButtonVariant } from '../../../../share/components/button/button.component';
import { CategoryService } from '../../services/category.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss'],
})
export class AddEditCategoryComponent implements OnInit {
  @Input() editVariant = false;
  public buttonVariant: typeof ButtonVariant = ButtonVariant;

  name = '';

  constructor(
    private location: Location,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.name = '';
  }

  onNameChange(name: string): void {
    this.name = name;
  }

  onCancel(): void {
    this.location.back();
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

  isValidName(): boolean {
    if (this.name.trim().length === 0) {
      return false;
    }
    return true;
  }
}
