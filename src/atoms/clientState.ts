// tsxからtsに変える
// ファイル名も変える（gameAtomとか?）
import type { Field, Users } from '../types/index'
import { atom } from "recoil";
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8000');

export const clientState = atom<any>({
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
