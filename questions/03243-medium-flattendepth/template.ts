/**
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
 */

type FlattenDepth<T extends any[], Num = 1, Save extends any[] = []> =
  Save['length'] extends Num
    ? T
    : T extends [infer F, ...infer R]
      ? F extends any[]
        ? [...FlattenDepth<F, Num, [1, ...Save]>, ...FlattenDepth<R, Num, Save>]
        : [F, ...FlattenDepth<R, Num, Save>]
      : []
