type TrimSpace = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${TrimSpace}${infer R}`
  ? Trim<R>
  : S extends `${infer P}${TrimSpace}`
    ? Trim<P>
    : S

type DevTrim = Trim<'   \n\t foo bar \t'>
