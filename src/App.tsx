import React, { useState, useEffect }from 'react'
import Game from './components/Game'
import { w3cwebsocket as W3CWebSocket } from 'websocket';

type Props = {
  client: any
}

type Message = {
  msg: string,
  user: string
}
type User = {
  [key: string]: {name: string}
}

type Users = {
  [key: string]: {[name: string]: string}
}
//type Users = any

const App: React.FC<Props> = ({ children, client }) => {
  const [loginState,setLoginState] = useState<boolean>(false);
  //const [loginState,setLoginState] = useState<boolean>(true);
  const [yourName, setYourName] = useState<string>('');
  const [users, setUsers] = useState<Users>({});
  //const [users, setUsers] = useState<Users>({'aaa': {name: 'aaa'}});
  const [loginInputUserName, setLoginInputUserName] = useState<string>('');
  const [clientId, setClientId] = useState<string>('aaa');

  const login = (senderName: string) => {
    setClientId(senderName)
    client.send(JSON.stringify({
      type: "login",
      senderName: senderName
    }));
  }

  // connect websocket
  useEffect(() => {
    client.onopen = (event: any) => {
      console.log('Websocket Client Connected')
    }
  }, []);

  useEffect(() => {
    client.onmessage = (message: any) => {
      console.log(JSON.parse(message.data))
      console.log('message')
      const dataFromServer = JSON.parse(message.data);
      switch (dataFromServer.type) {
        case 'command':
          console.log('未実装')
          break;
        case 'login':
          console.log('login')
          setUsers(dataFromServer.users)
          if (dataFromServer.senderName === loginInputUserName) {
            setYourName(dataFromServer.senderName);
            setLoginState(true);
          }
          break;
      }
    }
  }, [users, loginInputUserName]);

  //const onButtonClicked = (value: string) => {
  //  console.log('send')
  //  client.send(JSON.stringify({
  //    type: "message",
  //    msg: value,
  //    user: userName
  //  }));
  //}

  const renderUsers = () => {
    const elements: any = []
    for (const [key, value] of Object.entries(users)) {
      elements.push(<div key={value.name}>{value.name}</div>);
    }
    return elements;
  }

  return (
    <div>
      app component
      {loginState ? 
      <div>
        {
          //<Game users={users} yourName={yourName} />
        }
        { renderUsers() }

      </div>
      :
      <div>
        <input type="text" value={loginInputUserName} onChange={(e) => setLoginInputUserName(e.target.value)} />
        <button onClick={() => login(loginInputUserName)}>Login</button>
      </div>
      }
    </div>
  )
}

export default App;