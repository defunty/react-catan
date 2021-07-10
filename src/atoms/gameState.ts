/*
standby
playing
*/

import { atom } from "recoil";

export const gameState = atom<string>({
  key: 'gameState',
  default: 'standby'
})

export default gameState
