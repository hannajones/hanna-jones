export interface ReducerAction<T> {
  type: T;
  [property: string]: any;
}

export interface ErrorPayload {
  message: string;
}
