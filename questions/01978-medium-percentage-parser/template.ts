type GetPrefix<A extends string> = A extends `+${string}`
  ? '+'
  : A extends `-${string}`
    ? '-'
    : ''
type GetPerfix<A extends string> = A extends `${string}%` ? '%' : ''

type GetCenter<A extends string> = A extends `${GetPrefix<A>}${infer R}${GetPerfix<A>}` ? R : never

type PercentageParser<A extends string> = [
  GetPrefix<A>,
  GetCenter<A>,
  GetPerfix<A>,
]

type PrefixDev1 = PercentageParser<'+1'>
type PrefixDev2 = PercentageParser<'-1%'>
type PrefixDev3 = PercentageParser<'1'>
