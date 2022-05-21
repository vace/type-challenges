/**
interface User {
  name?: string
  age?: number
  address?: string
}

type UserPartialName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
 */

type RequiredMerge<T> = {
  [K in keyof T]: T[K]
}

type RequiredByKeys<T, K = keyof T> = RequiredMerge<{
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  [P in keyof T as P extends K ? P : never]-?: T[P]
}>

type DevRequiredByKeys = RequiredByKeys<{
  name?: string
  age?: number
  address?: string
}, 'name'>
