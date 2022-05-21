type Reverse<T> = T extends [...infer L, infer R] ? [R, ...Reverse<L>] : []

type DevReverse = Reverse<['a', 'b', 'c']>
