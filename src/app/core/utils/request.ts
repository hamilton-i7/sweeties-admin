import { FirestoreError } from '@angular/fire/firestore';

export interface RequestState<T> {
  loading: boolean;
  value?: T;
  error?: FirestoreError | Error;
}
