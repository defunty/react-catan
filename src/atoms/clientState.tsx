import { atom } from "recoil";
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8000');

const clientState = atom<any>({
  key: "clientState",
  default: client,
});

export default clientState;
