// type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

type MyCapitalize<S extends string> = S extends `${infer F}${infer L}` ? `${Capitalize<F>}${L}` : S

// type capitalized = Capitalize<'hello world'>
