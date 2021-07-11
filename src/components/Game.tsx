import { Logs, Users, Field } from '../types/index.d'
import React, { useState, useEffect }from 'react'
import { useRecoilState } from 'recoil'
import { logsState, usersState } from '../atoms/clientState'
import gameState from '../atoms/gameState'
import Log from './Log'
import Map from './Map'
import Dice from './Dice'
import UserList from './UserList'
import styled from '@emotion/styled'

type Props = {
  yourName: string
}

const Game: React.FC<Props> = ({ children, yourName }) => {
  const [logs, setLogs] = useRecoilState<Logs>(logsState)
  const [gameScene, setGameScene] = useRecoilState<string>(gameState)
  const [users, setUsers] = useRecoilState<Users>(usersState)

  function isStandby() {
    const isAllUserStandby = () => {
      let result: boolean | null = null;
      for(const [key, value] of Object.entries(users)) {
        console.log(value.standby)
        if (result === null) {
          result = value.standby
        } else if (result === true && value.standby === false) {
          result = false
        }
      }
      return result
    }
    return isAllUserStandby()
  }

  return (
    <StyledRoot>
      <Log />
      <Map />
      <Dice />
      { isStandby() &&
        <button className="GameStartButton" onClick={() => {setGameScene('playing')}}>Game Start</button>
      }
      <UserList yourName={yourName}/>
    </StyledRoot>
  )
}

//const StyledRoot = styled.div(() => ({
//  position: 'relative',
//  height: '100%',
//  width: '100%',
//  zIndex: 100,
//}))
const StyledRoot = styled.div`
  position: relative;
  padding-top: calc(50vh - 191px);
  height: 100%;
  width: 100%;
  z-index: 100;
  .GameStartButton {
    position: absolute;
    left: calc(50% - 40px);
    top: 10px;
  }
`

export default Game;
