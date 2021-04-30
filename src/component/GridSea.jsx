import React from 'react';
import styled from 'styled-components';

const Sea = styled.div`
  width: 10px;
  height: 10px;
`

export const GridSea = ({ address, setCountry, point }) => {
  return <Sea
      onMouseOver={() => !point && setCountry(address)}
    />
}

export const MemoizedGridSea = React.memo(GridSea);