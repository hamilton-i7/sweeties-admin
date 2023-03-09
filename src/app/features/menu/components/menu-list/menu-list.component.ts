import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from '../../../../core/models/category';
import { RequestState } from '../../../../core/utils/request';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  state$ = new BehaviorSubject<RequestState<ICategory[]>>({ loading: false });

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((state) => {
      this.state$.next(state);
    });
  }
}
