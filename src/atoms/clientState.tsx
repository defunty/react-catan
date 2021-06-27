import { atom } from "recoil";
//import Client from '../types/Client';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
//import W3CWebSocket = require('websocket')
//import w3cwebsocket = require('require')

//import type { client } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8000');

const clientState = atom<any>({
  key: "clientState",
  default: client,
});

export default clientState;
