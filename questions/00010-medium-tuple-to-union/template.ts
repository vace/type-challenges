type TupleToUnion<T extends unknown[]> = T[number]

type TupleToUnionDev1 = TupleToUnion<[123, '456', true]>
