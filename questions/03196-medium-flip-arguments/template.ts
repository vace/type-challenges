type ReverseArgument<T> = T extends [...infer L, infer R] ? [R, ...Reverse<L>] : []

type FlipArguments<T> = T extends (...args: infer M) => infer R ? (...args: ReverseArgument<M>) => R : unknown

type DevFlipArguments = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
