/**
 * example1:
type T = string | number
step1: string | number extends string | number
step2: string extends string | number => [number] extends [never] => true
step3: number extends string | number => [string] extends [never] => true
step4: true | true
result: true
 */

// type IsUnion<Type, Current extends Type = Type> = Current extends Type
//   ? Exclude<Type, Current> extends never
//     ? false
//     : true
//   : never

type IsUnion<Type, Current extends Type = Type> = Type extends Current
  ? [ Current ] extends [Type]
      ? false
      : true
  : false
