import React, { memo } from 'react';
import styled from 'styled-components';

const Load = styled.div`
  background-color: #eee;
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 50%;
`
const Sea = styled.div`
  width: 10px;
  height: 10px;
`
const Land = styled.div`
  background-color: #3C6B40;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  opacity: ${props => (props.point) ? '1' : props.visited ? `${props.visited / 5 + 0.1}` : "0.1"};

  &: hover > div {
    display: block;
  }
`
const Label = styled.div`
  display:none;
  position: absolute;
  bottom: 10px;
  left: 5px;
  color: white;
  width: auto;
  padding: 4px 10px;
  height: 24px;
  background-color: #333;
  border-radius: 12px;
  border: 2px solid #eee;
  z-index: 1;
`

const Grid = ({ address, visited, setCountry, point }) => {
  return (address === 'Sea')
  ? 
    <Sea
      onMouseOver={() => !point && setCountry(address)}
    />
  : 
    <Land
      point = {point}
      visited = {visited}
      onMouseOver = {() => !point && setCountry(address)}
    >
      <Label>
        {address}
      </Label>
    </Land>
}

export default React.memo(Grid, (prev, next) => next.address === 'Sea' || (prev.point === next.point) && (prev.visited === next.visited));