import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SkeletonLand = styled.div`
  background-color: #3C6B40;
  grid-column-start: ${props => `${props.column + 1}`};
  grid-column-end: ${props => `${props.column + 1 + props.length}`};

  cursor: pointer;
  position: relative;
  opacity: ${props => (props.point) ? '1' : props.visited ? `${props.visited / 5 + 0.1}` : "0.1"};

  &: hover > div {
    display: block;
  }
`
const Land = styled.div`
  grid-column-start: ${props => `${props.column + 1}`};
  grid-column-end: ${props => `${props.column + 1 + props.length}`};
  display: grid;
  grid-template-columns: repeat(${props => props.length}, 10px);
  grid-gap: 3px;

  justify-self: center;
  cursor: pointer;
  position: relative;
  opacity: ${props => (props.point) ? '1' : props.visited ? `${props.visited / 5 + 0.1}` : "0.1"};

  &: hover > div {
    display: block;
  }
`

const GridLand = styled.div`
  width: 10px;
  height: 10px;
  background-color: #3C6B40;
  border-radius: 50%;
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

const RowLand = ({ address, column, visited, setCountry, point, length }) => {
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    const tmpGrid = [];
    for(let i = 0 ; i < length ; i ++) {
      tmpGrid.push(i);
    }
    setGrid(tmpGrid);
  }, [])

  const makeLand = () => {
    return grid.map((value, i) => <GridLand key = {value}/>);
  }

  return grid ? <Land
            column = {column}
            length = {length}
            point = {point}
            visited = {visited}
            onMouseOver = {() => !point && setCountry(address)}
          >
            {
              makeLand()
            }
          </Land>
          :
          <SkeletonLand
            column = {column}
            length = {length}
            point = {point}
            visited = {visited}
            onMouseOver = {() => !point && setCountry(address)}
          >
          </SkeletonLand>
}

export default React.memo(RowLand, (prev, next) => (prev.point === next.point) && (prev.visited === next.visited));