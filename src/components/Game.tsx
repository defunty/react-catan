import React, { useState, useEffect }from 'react'
//import PlayerList from './PlayerList'

//type Props = React.ComponentProps<typeof PlayerList>

type Users = {
  [key: string]: {[name: string]: string}
}
type Props = {}
//type Props = {
//  users: Users,
//  yourName: string
//}


//const Game: React.FC<Props> = ({ children, users, yourName }) => {
//  return (
//    <div className="Game">
//      <div>Map Component</div>
//      <PlayerList users={users} yourName={yourName}/>
//    </div>
//  )
//}

const Game: React.FC<Props> = ({ children }) => {
  return (
    <div className="Game">
      <div>Map Component</div>
    </div>
  )
}

export default Game;
