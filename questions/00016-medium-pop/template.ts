type Pop<T extends any[]> = T extends [...infer F, infer L] ? F : never

type DevPop = Pop<[3, 2, 1]>
type DevPop2 = Pop<['a', 'b', 'c', 'd']>
