type MyExclude<T, U> = T extends U ? never : T

type User = MyExclude<'a' | 'b' | 'c', 'a' | 'c'>
