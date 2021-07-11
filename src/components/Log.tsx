// component template
import type { Logs, Client } from '../types/index'
import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { logsState } from '../atoms/clientState';
import styled from '@emotion/styled'

const Log = () => {
  //const logs = useRecoilValue<Logs>(logsState)
  //const [a, setA] = useState<Logs>(['aaa', 'bbb'])
  const [logs, setLogs] = useRecoilState<Logs>(logsState)
  //useEffect(() => {
  //  if (logs.length >= 1) {
  //    setTimeout(() => {
  //      setLogs(prevLogs => [...prevLogs])
  //    }, 3000)
  //  }
  //}, [logs])

  

  return (
    <StyledRoot>
      {logs.map(value => <div className="Log">{value}</div>)}
      {
      //<button onClick={() => setA(prevA => [...prevA].push('aas'))}>push</button>
      //<button onClick={() => setA(prevA => [...prevA, 'ccc'])}>shift</button>
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
  top: 0;
  width: 100%;
  z-index: 1;
  .Logs {
    width: 300px;
    background-color: red;
    z-index: 1;
  }


`

export default Log;
