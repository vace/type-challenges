/**
 * PromiseAll([1, 2, Promise.resolve(3)] as const)
 */

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: T[K] extends Promise<infer P> ? P : T[K]
}>

const Dev1PromiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
