// @see https://github.com/type-challenges/type-challenges/issues/775
type UnionToIntersection<U> = (U extends infer R ? (x: R) => any : never) extends (x: infer V) => any ? V : never
