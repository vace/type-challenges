type RequiredKeys<T> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: never
}

// type DEV = RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>
