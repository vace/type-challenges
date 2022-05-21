type Shift<T> = T extends [infer L, ...infer R] ? R : never

type DevShift = Shift<[3, 2, 1]>
