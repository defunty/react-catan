import { Users, Field } from '../types/index.d'
import React, { useState, useEffect }from 'react'
import Map from './Map'
import UserList from './UserList'
import styled from '@emotion/styled'

type Props = {
  yourName: string
}

const Game: React.FC<Props> = ({ children, yourName }) => {
  return (
    <StyledRoot>
      <Map />
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
