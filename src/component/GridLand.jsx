import React from 'react';
import styled from 'styled-components';

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
  white-space: no-wrap;
`

const GridLand = ({ address, visited, setCountry, point }) => {
  return <Land
            point = {point}
            visited = {visited}
            onMouseOver = {() => !point && setCountry(address)}
          >
            <Label>
              {address}
            </Label>
          </Land>
}

export default React.memo(GridLand, (prev, next) => (prev.point === next.point) && (prev.visited === next.visited));