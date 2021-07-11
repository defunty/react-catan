export type Message = {
  msg: string,
  user: string
}

export type Users = {
  [key: string]: {name: string, score: number, standby: boolean}
}

export type Client = any

export type Field = {resource: string, number: number}

export type Dices = integer[]
