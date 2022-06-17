type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string> = S extends `${infer _F}%${infer M}${infer L}`
  ? (M extends keyof ControlsMap ? [ControlsMap[M], ...ParsePrintFormat<L>] : ParsePrintFormat<L>) : []

// ['string', 'dec']
// type DEVXX = ParsePrintFormat<'Hello %s: score is %d.'>
type DEVXX = ParsePrintFormat<'The result is %%%d.'>
