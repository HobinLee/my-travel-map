import React from 'react';
import styled from 'styled-components';

const Land = styled.div`
  grid-column-start: ${props => `${props.column + 1}`};
  grid-column-end: ${props => `${props.column + 1 + props.length}`};
`
export const RowSea = ({ column, setCountry, point, length }) => {
  return <Land
            column = {column}
            length = {length}
            point = {point}
            onMouseOver = {() => !point && setCountry('Sea')}
          >
          </Land>
}

export const MemoizedSea =  React.memo(RowSea);