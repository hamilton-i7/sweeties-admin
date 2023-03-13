import { Injectable } from '@angular/core';
import {
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
  StorageReference,
  UploadResult,
} from '@angular/fire/storage';
import { collection, FirestoreError } from '@firebase/firestore';
import {
  Observable,
  map,
  catchError,
  startWith,
  of,
  from,
  mergeMap,
} from 'rxjs';
import {
  PATH_PRODUCTS,
  PATH_STORAGE_PRODUCTS,
} from '../../../core/constants/product';
import { productConverter } from '../../../core/converters/product';
import { IProduct } from '../../../core/models/product';
import { RequestState } from '../../../core/utils/request';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore, private storage: Storage) {}

  getProducts(): Observable<RequestState<IProduct[]>> {
    const ref = collection(this.firestore, PATH_PRODUCTS).withConverter(
      productConverter
    );
    return collectionData(ref, { idField: 'id' }).pipe(
      map((products) => ({ loading: false, value: products })),
      catchError(this.handleError<IProduct[]>('getProducts', [])),
      startWith({ loading: true })
    );
  }

  getProduct(id: string): Observable<RequestState<IProduct | undefined>> {
    const ref = doc(this.firestore, PATH_PRODUCTS, id).withConverter(
      productConverter
    );
    return from(getDoc(ref)).pipe(
      map((docSnap) => ({ loading: false, value: docSnap.data() })),
      catchError(this.handleError<IProduct | undefined>('getProduct')),
      startWith({ loading: true })
    );
  }

  addProduct(product: IProduct, image: File): Observable<RequestState<void>> {
    const ref = doc(this.firestore, PATH_PRODUCTS, product.id).withConverter(
      productConverter
    );
    return this.uploadImage(image).pipe(
      mergeMap((result) => this.getImageUrl(result.ref)),
      mergeMap((imgUrl) => {
        const finalProduct: IProduct = {
          ...product,
          imgPath: `${PATH_STORAGE_PRODUCTS}/${image.name}`,
          imgUrl,
        };
        return from(setDoc(ref, finalProduct)).pipe(
          map(() => ({ loading: false })),
          catchError(this.handleError<void>('addProduct')),
          startWith({ loading: true })
        );
      })
    );
  }

  updateProduct(
    product: IProduct,
    image?: File
  ): Observable<RequestState<void>> {
    const ref = doc(this.firestore, PATH_PRODUCTS, product.id).withConverter(
      productConverter
    );

    if (!image) {
      return from(updateDoc(ref, product)).pipe(
        map(() => ({ loading: false })),
        catchError(this.handleError<void>('updateProduct'))
      );
    }
    return this.uploadImage(image).pipe(
      mergeMap((result) => this.getImageUrl(result.ref)),
      mergeMap((imgUrl) => {
        const finalProduct: IProduct = {
          ...product,
          imgPath: `${PATH_STORAGE_PRODUCTS}/${image.name}`,
          imgUrl,
        };
        return from(updateDoc(ref, finalProduct)).pipe(
          map(() => ({ loading: false })),
          catchError(this.handleError<void>('updateProduct')),
          startWith({ loading: true })
        );
      })
    );
  }

  deleteProduct(id: string): Observable<RequestState<void>> {
    const ref = doc(this.firestore, PATH_PRODUCTS, id).withConverter(
      productConverter
    );
    return from(deleteDoc(ref)).pipe(
      map(() => ({ loading: false })),
      catchError(this.handleError<void>('deleteProduct')),
      startWith({ loading: true })
    );
  }

  private getImageUrl(ref: StorageReference): Observable<string> {
    return from(getDownloadURL(ref));
  }

  private uploadImage(image: File): Observable<UploadResult> {
    const imgRef = ref(this.storage, `${PATH_STORAGE_PRODUCTS}/${image.name}`);
    return from(uploadBytes(imgRef, image));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: FirestoreError): Observable<RequestState<T>> => {
      console.error(`${operation} failed: ${error.message}`);
      return of({ loading: false, error, value: result as T });
    };
  }
}
