export type Message = {
  msg: string,
  user: string
}

export type Users = {
  [key: string]: {name: string, score: number}
}

export type Field = {resource: string, number: number}
