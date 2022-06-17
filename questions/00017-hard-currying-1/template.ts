type CurryingFn<F> = F extends (...args: infer Args) => infer Ret ?
  Args extends [infer First, ...infer Rest] ? (next: First) => CurryingFn<(...arg: Rest) => Ret> : ReturnType<F> : never

declare function Currying<T>(fn: T): CurryingFn<T>

// const add = (a: number, b: number) => a + b
// const three = add(1, 2)

// const curriedAdd = Currying(add)
// const five = curriedAdd(2)(3)
