type Flip<T> = {
  [K in keyof T as T[K]]: T
}
