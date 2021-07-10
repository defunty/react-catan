import { Users, Field } from '../types/index.d'
import React, { useState, useEffect }from 'react'
import { useRecoilState } from 'recoil'
import { usersState } from '../atoms/clientState'
import gameState from '../atoms/gameState'
import Map from './Map'
import UserList from './UserList'
import styled from '@emotion/styled'

type Props = {
  yourName: string
}

const Game: React.FC<Props> = ({ children, yourName }) => {
  const [gameScene, setGameScene] = useRecoilState<string>(gameState)
  const [users, setUsers] = useRecoilState<Users>(usersState)

  useEffect(() => {

  }, [users])
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
      <Map />
      { isStandby() &&
        <button onClick={() => {setGameScene('playing')}}>Game Start</button>
      }
      <UserList yourName={yourName}/>
    </StyledRoot>
  )
}

const StyledRoot = styled.div(() => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  zIndex: 100
}))

export default Game;
