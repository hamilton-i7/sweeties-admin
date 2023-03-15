export interface RequestState<T> {
  loading: boolean;
  value?: T;
  error?: string;
}
