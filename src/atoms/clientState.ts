// ファイル名も変える（hogeAtomとか?）
import type { Client, Field, Users, Dices, Logs } from '../types/index'
import { atom } from "recoil";
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8000');

export const clientState = atom<Client>({
  key: 'clientState',
  default: client,
});

export const fieldsState = atom<Field[]>({
  key: 'fieldsState',
  default: []
})

export const usersState = atom<Users>({
  key: 'usersState',
  default: {}
})

export const dicesState = atom<Dices>({
  key: 'dicesState',
  default: []
})

export const logsState = atom<Logs>({
  key: 'logsState',
  default: []
})
