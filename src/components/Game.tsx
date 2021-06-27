import { Users } from '../types/index.d'
import React, { useState, useEffect }from 'react'
import Map from './Map'
import UserList from './UserList'
import styled from '@emotion/styled'

type Props = {
  users: Users,
  yourName: string
}

const Game: React.FC<Props> = ({ children, users, yourName }) => {

  return (
    <StyledRoot>
      <Map />
      <UserList users={users} yourName={yourName}/>
    </StyledRoot>
  )
}

const StyledRoot = styled.div(() => ({
  position: 'relative',
  height: '100%',
  width: '100%'
}))

export default Game;
