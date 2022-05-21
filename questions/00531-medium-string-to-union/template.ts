/**
 * 实现一个将接收到的String参数转换为一个字母Union的类型。
 * type Test = '123';
 * type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
 */
type StringToUnion<T extends string> = T extends `${infer F}${infer L}` ? (F | StringToUnion<L>) : never

type DevStringToUnion = StringToUnion<'123'>
