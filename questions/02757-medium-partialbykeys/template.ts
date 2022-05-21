type MergePartial<T> = {
  [P in keyof T]: T[P]
}

type PartialByKeys<T, K = keyof T> = MergePartial<{
  [F in keyof T as (F extends K ? never : F)]: T[F]
} & {
  [F in keyof T as (F extends K ? F : never)]?: T[F]
}>

type PartialByKeysDev = PartialByKeys<{
  name: string
  age: number
  address: string
}, 'name' | 'age'>
