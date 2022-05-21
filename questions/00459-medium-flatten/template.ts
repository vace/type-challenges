/**
 * type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>
 * [1, 2, 3, 4, 5]
 */

type Flatten<T> = T extends [infer F, ...infer L]
  ? F extends unknown[]
    ? [...Flatten<F>, ...Flatten<L>]
    : [Flatten<F>, ...Flatten<L>]
  : T

// type DevFlatten = Flatten<[1, 2, [3, 4], [[[5]]]]>
