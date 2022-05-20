type LengthOfString1<S extends string, T extends string[] = []> = S extends `${infer F}${infer L}` ? LengthOfString1<L, [...T, F]> : T['length']

// type Tlen = LengthOfString1<'hello'>
