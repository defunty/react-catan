import React, { useState, useEffect }from 'react'

type Props = {
  client: any
}

type Message = {
  msg: string,
  user: string
}

//function App(props) {
const App: React.FC<Props> = ({ children, client }) => {
  console.log('test');

  const [loginState,setLoginState] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');

  // init
  useEffect(() => {
    client.onopen = () => {
      console.log('Websocket Client Connected')
    }
    client.onmessage = (message: any) => {
      console.log('onMessage')
      const dataFromServer = JSON.parse(message.data);
      console.log(`On Message`, dataFromServer)
      if (dataFromServer.type === 'message') {
        console.log('setMessages')
        setMessages(prevMessages => [...prevMessages, {msg: dataFromServer.msg, user: dataFromServer.user}])
        if (userName === dataFromServer.user) {
          setInputText('');
        }
      }
    }
  }, [])

  useEffect(() => {
    console.log('useeffect')
  })

  const onButtonClicked = (value: string) => {
    console.log('send')
    client.send(JSON.stringify({
      type: "message",
      msg: value,
      user: userName
    }));
  }

  return (
    <div>
      app component
      {loginState ? 
      <div>
        <div>You're {userName}</div>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button onClick={() => onButtonClicked(inputText)}>Send Message</button>
        {messages.map((message, index) => <p key={index}>message: {message.msg}, user: {message.user}</p>)}
      </div>
      :
      <div>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button onClick={() => setLoginState(true)}>Login</button>
      </div>
      }
    </div>
  )
}

export default App;