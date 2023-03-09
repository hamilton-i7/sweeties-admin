import { Injectable } from '@angular/core';
import {
  collectionData,
  doc,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
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

  updateCategory(category: ICategory): Observable<RequestState<void>> {
    const ref = doc(
      this.firestore,
      `${PATH_CATEGORIES}/${category.id}`
    ).withConverter(categoryConverter);
    return from(updateDoc(ref, category)).pipe(
      map(() => ({ loading: false, value: undefined })),
      catchError(this.handleError<void>('updateCategory'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: FirestoreError): Observable<RequestState<T>> => {
      console.error(`${operation} failed: ${error.message}`);
      return of({ loading: false, error, value: result as T });
    };
  }
}
