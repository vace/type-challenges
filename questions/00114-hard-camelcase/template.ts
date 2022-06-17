type CamelCase<S extends string> = S extends Lowercase<S>
  ? S extends `${infer F}_${infer RF}${infer R}`
    ? `${F}${Uppercase<RF>}${CamelCase<R>}`
    : S
  : CamelCase<Lowercase<S>>
