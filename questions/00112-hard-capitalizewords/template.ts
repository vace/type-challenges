type CapitalizeWords<S extends string> =
  S extends `${infer F} ${infer L}` ? `${Capitalize<F>} ${CapitalizeWords<L>}` :
    S extends `${infer F}.${infer L}` ? `${Capitalize<F>}.${CapitalizeWords<L>}` :
      S extends `${infer F},${infer L}` ? `${Capitalize<F>},${CapitalizeWords<L>}` :
        Capitalize<S>

// type DEV = CapitalizeWords<'foo bar hello world'>
