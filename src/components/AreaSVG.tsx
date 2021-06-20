import React, { useState, useEffect }from 'react'
import styled from '@emotion/styled'

const AreaSVG = () => {
  return (
    <StyledRoot>
      <svg viewBox="-150 -150 300 300">
        <path d="M138 57 L 57 138 L -57 138 L -138 57 L -138 -57 L -57 -138 L 57 -138 L 138 -57 z"></path>
      </svg>
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
  height: 60px;
  width: 60px;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  path {
    fill: red;
  }
`

export default AreaSVG;
