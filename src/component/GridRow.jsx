import React, { memo } from 'react';
import styled from 'styled-components';
import Grid from './Grid';

const MapDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 3px;
  justify-content: flex-start;
  align-element: center;
`

const GridRow = ({ geo, update, setCountry, country }) => {
  const generateMapGrid = () => {
    return geo.map((address, j) => 
      <Grid key={j} address={address} point = {country === address} setCountry={setCountry}></Grid>
    )
  }

  return <MapDiv>{generateMapGrid()}</MapDiv>
}

export default React.memo(GridRow, (prev, next) => prev.update === next.update);