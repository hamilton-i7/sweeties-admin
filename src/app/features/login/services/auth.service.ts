import { Injectable } from '@angular/core';
import {
  Observable,
  from,
  map,
  startWith,
  catchError,
  of,
  BehaviorSubject,
} from 'rxjs';
import {
  Auth,
  AuthError,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from '@angular/fire/auth';
import { RequestState } from '../../../core/utils/request';
import { IUser } from '../../../core/models/users';
import { UserService } from '../../users/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser$ = new BehaviorSubject<IUser | undefined>(undefined);
  currentUser$ = this._currentUser$.asObservable();

  constructor(private auth: Auth, userService: UserService) {
    onAuthStateChanged(auth, (user) => {
      if (!user || !user.email) {
        this._currentUser$.next(undefined);
        return;
      }

      userService.getUser(user.email).subscribe((state) => {
        this._currentUser$.next(state.value);
      });
    });
  }

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
