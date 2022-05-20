type Chainable<T extends {} = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    val: V
  ): Chainable<T & Record<K, V>>
  get(): T
}
