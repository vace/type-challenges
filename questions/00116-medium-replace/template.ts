// Replace<'foobar', 'bar', 'foo'>, 'foofoo'>

type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer F}${From}${infer L}`
    ? `${F}${To}${L}`
    : S

type DevReplace = Replace<'foobar', 'bar', 'foo'>
