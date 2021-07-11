import { Client, Message, Users, Field, Dices } from './types/index.d'
import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { clientState, fieldsState, usersState, dicesState } from './atoms/clientState'
import Game from './components/Game'
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import styled from '@emotion/styled'
import './index.css'

const App = () => {
  // atom
  const [client, setClient] = useRecoilState<Client>(clientState);
  const [fields, setFields] = useRecoilState<Field[]>(fieldsState);
  const [users, setUsers] = useRecoilState<Users>(usersState);
  const [dices, setDices] = useRecoilState<Dices>(dicesState);

  // this
  const [loginState,setLoginState] = useState<boolean>(false);
  const [yourName, setYourName] = useState<string>('');
  const [loginInputUserName, setLoginInputUserName] = useState<string>('');

  const login = (senderName: string) => {
    //setClientId(senderName)
    client.send(JSON.stringify({
      type: "login",
      senderName: senderName
    }));
  }

  // connect websocket
  useEffect(() => {
    client.onopen = (event: any) => {
      console.log(event)
      console.log('Websocket Client Connected')
    }
  });

  useEffect(() => {
    client.onmessage = (message: any) => {
      //console.log(JSON.parse(message.data))
      const dataFromServer = JSON.parse(message.data);
      console.log('onmessage')
      console.log(dataFromServer.type)
      switch (dataFromServer.type) {
        case 'setFields':
          console.log('setFields')
          setFields(dataFromServer.fields)
          break;
        case 'login':
          console.log('login')
          setUsers(dataFromServer.users)
          if (dataFromServer.senderName === loginInputUserName) {
            setYourName(dataFromServer.senderName);
            setLoginState(true);
          }
          break;
        case 'updateUsers':
          console.log('updateUsers')
          setUsers(dataFromServer.users)
          break;
        case 'updateDices':
          console.log('updateDices')
          setDices(dataFromServer.dices)
          break;
      }
    }
  }, [users, loginInputUserName]);

  return (
    <StyledRoot>
      {loginState ?
      <Game yourName={yourName} />
      :
      <div>
        <input type="text" value={loginInputUserName} onChange={(e) => setLoginInputUserName(e.target.value)} />
        <button onClick={() => login(loginInputUserName)}>Login</button>
      </div>
      }
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`

export default App;