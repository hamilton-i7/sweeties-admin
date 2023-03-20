import { Injectable } from '@angular/core';
import { Observable, from, map, catchError, startWith, of } from 'rxjs';
import {
  collection,
  collectionData,
  doc,
  Firestore,
  FirestoreError,
  getDoc,
} from '@angular/fire/firestore';
import { RequestState } from '../../../core/utils/request';
import { IUser } from '../../../core/models/users';
import { PATH_USERS } from '../../../core/constants/users';
import { userConverter } from '../../../core/converters/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  getUsers(): Observable<RequestState<IUser[]>> {
    const ref = collection(this.firestore, PATH_USERS).withConverter(
      userConverter
    );
    return collectionData(ref, { idField: 'email' }).pipe(
      map((users) => ({ loading: false, value: users })),
      catchError(this.handleError<IUser[]>('getUsers', [])),
      startWith({ loading: true })
    );
  }

  getUser(email: string): Observable<RequestState<IUser | undefined>> {
    const ref = doc(this.firestore, PATH_USERS, email).withConverter(
      userConverter
    );
    return from(getDoc(ref)).pipe(
      map((docSnap) => ({ loading: false, value: docSnap.data() })),
      catchError(this.handleError<IUser | undefined>('getUser')),
      startWith({ loading: true })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: FirestoreError): Observable<RequestState<T>> => {
      console.error(`${operation} failed: ${error.message}`);
      return of({ loading: false, error: error.message, value: result as T });
    };
  }
}
