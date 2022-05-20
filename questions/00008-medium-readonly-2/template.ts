type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>

type DevMyReadonly2 = MyReadonly2<{
  title: string
  description?: string
  completed: boolean
}, 'title'>
