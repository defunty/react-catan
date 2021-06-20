import React, { useState, useEffect }from 'react'
import styled from '@emotion/styled'
import AreaSVG from './AreaSVG'

const Map = () => {
  return (
    <StyledRoot>
      <div className="Column">
        <AreaSVG />
        <AreaSVG />
        <AreaSVG />
      </div>
      <div className="Column">
        <AreaSVG />
        <AreaSVG />
        <AreaSVG />
        <AreaSVG />
      </div>
      <div className="Column">
        <AreaSVG />
        <AreaSVG />
        <AreaSVG />
        <AreaSVG />
        <AreaSVG />
      </div>
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  .Column {
    display: flex;
  }
`

export default Map;
