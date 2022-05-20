/**
 * MyOmit<Todo, 'description' | 'completed'>
 */

type MyOmitExclude<T, K> = T extends K ? never : T

type MyOmit<T, K extends keyof T> = {
  [P in MyOmitExclude<keyof T, K>]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type Dev = MyOmit<Todo, 'description'>
