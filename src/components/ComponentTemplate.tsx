// component template
// 呼び出し禁止
import type { Client, Dices } from '../types/index'
import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { clientState, dicesState } from '../atoms/clientState';
import styled from '@emotion/styled'

const Hoge = () => {
  return (
    <StyledRoot>
    </StyledRoot>
  )
}

const StyledRoot = styled.div``

export default Hoge;
