type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer F}${From}${infer L}`
    // ! {ReplaceAll<`${F}${To}${L}`, From, To>} 回导致无限递归
    ? `${F}${To}${ReplaceAll<`${L}`, From, To>}`
    : S

type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
