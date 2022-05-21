/**
 * 从字符串中剔除指定字符。
 * DropChar<' b u t t e r f l y ! ', ' '>
 */

type DropChar<S extends string, C extends string> =
  S extends `${infer L}${infer R}`
    ? L extends C
      ? DropChar<R, C>
      : `${L}${DropChar<R, C>}`
    : S

type DevDropChar = DropChar<' b u t t e r f l y ! ', ' '>
