/**
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
 */
type ObjectEntries<T, U = Required<T>> = {
  [K in keyof U]: [K, U[K]]
}[keyof U]

type modelEntries = ObjectEntries<{
  name: string
  age: number
  locations: string[] | null
}> // ['name', string] | ['age', number] | ['locations', string[] | null];

type modelEntries2 = ObjectEntries<Partial<{
  name: string
  age: number
  locations: string[] | null
}>> // ['name', string] | ['age', number] | ['locations', string[] | null];
