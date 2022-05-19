type MyAwaited<T> = T extends Promise<infer Kind> ? MyAwaited<Kind> : T

type DEV1 = MyAwaited<Promise<string>>
type DEV2 = MyAwaited<Promise<{ key: string }>>
type DEV3 = MyAwaited<number>
