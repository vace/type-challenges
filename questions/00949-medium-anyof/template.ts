/**
 * 在类型系统中实现类似于 Python 中 any 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 true，否则返回 fasle。如果数组为空，返回 false。
 * type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
 */

type AnyOfTrue<T> = T extends 0 | '' | false | null | undefined | []
  ? true
  : T extends {}
    ? keyof T extends never
      ? true
      : false
    :false

type AnyOf<T extends readonly any[]> = T extends [infer L, ...infer R]
  ? AnyOfTrue<L> extends true
    ? AnyOf<R>
    : true
  : false

// type DevAnyOf = AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>
// type DevAnyOf = AnyOf<[[], {}]>
