import React, { useState, useEffect }from 'react'
import styled from '@emotion/styled'

type Props = {
  number: number,
  resource: string
}

const AreaSVG = ({ number, resource }: Props) => {
  return (
    <StyledRoot className={resource}>
      <svg viewBox="-150 -150 300 300">
        <path d="M138 57 L 57 138 L -57 138 L -138 57 L -138 -57 L -57 -138 L 57 -138 L 138 -57 z"></path>
      </svg>
      <div className="Number">{number}</div>
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  &.brick path {
    fill: brown;
  }
  &.grain path {
    fill: gold;
  }
  &.ore path {
    fill: silver;
  }
  &.wool path {
    fill: lawngreen;
  }
  &.wood path {
    fill: darkgreen;
  }
  &.desert path {
    fill: yellow;
  }
  .Number {
    background-color: #fff;
    color: #333;
    text-aligin: center;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 20px;
    height: 20px;
    width: 20px;
  }
`

export default AreaSVG;
