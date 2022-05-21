/**
 * 获取两个接口类型中的差值属性。
 */

type Diff<O, O1> = {
  [K in (Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>)]: (O & O1)[K]
}

type Foo = {
  a: string
  b: number
}
type Bar = {
  a: string
  c: boolean
}

type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar, Foo> // { b: number, c: boolean }
