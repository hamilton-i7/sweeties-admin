import { Injectable, inject } from '@angular/core';
import {
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { collection, FirestoreError } from '@firebase/firestore';
import { Observable, of, map, catchError, startWith, from } from 'rxjs';
import { PATH_CATEGORIES } from '../../../core/constants/category';
import { categoryConverter } from '../../../core/converters/category';
import { ICategory } from '../../../core/models/category';
import { RequestState } from '../../../core/utils/request';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private firestore: Firestore) {}

  getCategories(): Observable<RequestState<ICategory[]>> {
    const ref = collection(this.firestore, PATH_CATEGORIES).withConverter(
      categoryConverter
    );
    return collectionData(ref, { idField: 'id' }).pipe(
      map((categories) => ({ loading: false, value: categories })),
      catchError(this.handleError<ICategory[]>('getCategories', [])),
      startWith({ loading: true })
    );
  }

  getCategory(id: string): Observable<RequestState<ICategory | undefined>> {
    const ref = doc(this.firestore, PATH_CATEGORIES, id).withConverter(
      categoryConverter
    );
    return from(getDoc(ref)).pipe(
      map((docSnap) => ({ loading: false, value: docSnap.data() })),
      catchError(this.handleError<ICategory | undefined>('getCategory')),
      startWith({ loading: true })
    );
  }

  addCategory(category: ICategory): Observable<RequestState<boolean>> {
    const ref = doc(this.firestore, PATH_CATEGORIES, category.id).withConverter(
      categoryConverter
    );
    return from(setDoc(ref, category)).pipe(
      map(() => ({ loading: false, value: true })),
      catchError(this.handleError<boolean>('addCategory', false)),
      startWith({ loading: true })
    );
  }

  updateCategory(category: ICategory): Observable<RequestState<boolean>> {
    const ref = doc(this.firestore, PATH_CATEGORIES, category.id).withConverter(
      categoryConverter
    );
    return from(updateDoc(ref, category)).pipe(
      map(() => ({ loading: false, value: true })),
      catchError(this.handleError<boolean>('updateCategory', false)),
      startWith({ loading: true })
    );
  }

  deleteCategory(id: string): Observable<RequestState<boolean>> {
    const ref = doc(this.firestore, PATH_CATEGORIES, id).withConverter(
      categoryConverter
    );
    return from(deleteDoc(ref)).pipe(
      map(() => ({ loading: false, value: true })),
      catchError(this.handleError<boolean>('deleteCategory', false)),
      startWith({ loading: true })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: FirestoreError): Observable<RequestState<T>> => {
      console.error(`${operation} failed: ${error.message}`);
      return of({ loading: false, error, value: result as T });
    };
  }
}

export const categoryNameResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot
) => {
  const categoryId = route.paramMap.get('id');

  if (!categoryId) return of('');
  return inject(CategoryService)
    .getCategory(categoryId)
    .pipe(map((state) => state.value?.name ?? ''));
};
