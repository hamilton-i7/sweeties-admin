import { Injectable } from '@angular/core';
import { Observable, from, map, startWith, catchError, of } from 'rxjs';
import {
  Auth,
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from '@angular/fire/auth';
import { RequestState } from '../../../core/utils/request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  register(email: string, password: string): Observable<RequestState<User>> {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      map((credentials) => ({ loading: false, value: credentials.user })),
      catchError(this.handleError<User>('register')),
      startWith({ loading: true })
    );
  }

  login(email: string, password: string): Observable<RequestState<User>> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map((credentials) => ({ loading: false, value: credentials.user })),
      catchError(this.handleError<User>('register')),
      startWith({ loading: true })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: AuthError): Observable<RequestState<T>> => {
      console.error(`${operation} failed: ${error.message}`);
      return of({ loading: false, error, value: result as T });
    };
  }
}