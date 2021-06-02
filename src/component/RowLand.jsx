import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SkeletonLand = styled.div`
  background-color: ${props => (props.point) ? 'var(--pointColor)' : props.visited ? `var(--highlightColor)` : "var(--defaultColor)"};
  grid-column-start: ${props => `${props.column + 1}`};
  grid-column-end: ${props => `${props.column + 1 + props.length}`};

  cursor: pointer;
  position: relative;

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

  &: hover > div {
    display: block;
  }
`

const GridLand = styled.div`
  background-color: ${props => props.visited ? props.visited === 1 ? "orange" : "skyblue" : (props.point) ? 'var(--highlightColor)' : "var(--defaultColor)"};
  width: 10px;
  height: 10px;
  border-radius: 50%;
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
    return grid.map((value, i) => <GridLand key = {value} point={point} visited={visited}/>);
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
          >
          </SkeletonLand>
}

export default React.memo(RowLand, (prev, next) => (prev.point === next.point) && (prev.visited === next.visited));