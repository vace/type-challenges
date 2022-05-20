/**
 * type Fn = (a: number, b: string) => number
 * type Result = AppendArgument<Fn, boolean>
 * 期望是 (a: number, b: string, x: boolean) => number
 */

type AppendArgument<Fn extends (...args: any[]) => unknown, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>

// type Fn = (a: number, b: string) => number
// type Result = AppendArgument<Fn, boolean>
