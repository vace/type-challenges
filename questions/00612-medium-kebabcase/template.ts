/**
 * FooBarBaz -> foo-bar-baz
 */

type KebabCase<S> = S extends `${infer L}${infer R}`
  ? Uncapitalize<R> extends R
    ? `${Uncapitalize<L>}${KebabCase<R>}`
    : `${Uncapitalize<L>}-${KebabCase<R>}`
  : S

type DEVKebabCase = KebabCase<'FooBarBaz'>
