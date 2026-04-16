export type Value =
  | number
  | string
  | boolean
  | null
  | Value[]
  | { [key: string]: Value }
