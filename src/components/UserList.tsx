import { Users } from '../types/index.d'
import React, { useState, useEffect }from 'react'
import { usersState } from '../atoms/clientState'
import { useRecoilState } from 'recoil'
import styled from '@emotion/styled'

type Props = {
  yourName: string
}

const UserList: React.FC<Props> = ({ children, yourName }) => {
  const [users, setUsers] = useRecoilState<Users>(usersState);
  console.log(users)

  const standby = (arg: {}) => {
    //setUsers(prevUsers => ({...prevUsers, [yourName]: {standby: true}}))
    const tmpUsers: Users = {}
    for (const [key, value] of Object.entries(users)) {
      tmpUsers[key] = {...value}
      if (key === yourName) {
        tmpUsers[key]['standby'] = true
      }
    }
    setUsers(tmpUsers)
  }

  const renderUsers = () => {
    const elements: any = []
    for (const [key, value] of Object.entries(users)) {
      elements.push(
        <div className="User" key={value.name}>
          <span>{value.name}</span>
          {(!users[yourName]['standby'] && yourName === value.name) &&
          <button onClick={() => {standby(true)}}>standby</button>
          }
        </div>
      );
    }
    return elements;
  }

  return (
    <StyledRoot>
      { renderUsers() }
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .User {
    background-color: #fff;
    border: 1px solid black;
    border-radius: 4px;
    height: 40px;
    width: 200px;
  }
  .User:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
  }
  .User:nth-of-type(2) {
    position: absolute;
    top: 0;
    right: 200px;
  }
  .User:nth-of-type(3) {
    position: absolute;
    bottom: 40px;
    left: 0;
  }
  .User:nth-of-type(4) {
    position: absolute;
    bottom: 40px;
    right: 200px;
  }
`

export default UserList;
