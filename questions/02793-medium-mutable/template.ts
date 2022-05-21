type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}

type DevMutable = Mutable<{
  readonly id: number
  readonly user: {
    readonly nickname: string
  }
}>
