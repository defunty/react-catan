import type { Client, Dices } from '../types/index'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { clientState, dicesState } from '../atoms/clientState';
import styled from '@emotion/styled'

const Dice = () => {
  const [client, setClient] = useRecoilState<Client>(clientState)
  const [dices, setDices] = useRecoilState<Dices>(dicesState)

  const clickDiceRollButton = () => {
    const resultA = getRandomInt(1, 7)
    const resultB = getRandomInt(1, 7)
    client.send(JSON.stringify({
      type: "updateDices",
      dices: [resultA, resultB]
    }));
    setDices([resultA, resultB])

    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
  }

  return (
    <StyledRoot>
      <button className="DiceRollButton" onClick={() => {clickDiceRollButton()}}>Role Dice</button>
      { dices.length === 2 &&
      <div>{dices[0]} , {dices[1]}</div>
      }
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;

  .DiceRollButton {
    cursor: pointer;
    z-index: 100;
  }
`

export default Dice;
