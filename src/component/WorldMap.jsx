import React, { useState, useEffect } from 'react';
import worldgrid from './map.json';
import styled from 'styled-components';
import Grid from './Grid';

const MapWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-element: center;
`
const MapDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 3px;
  justify-content: flex-start;
  align-element: center;
`

const WorldMap = () => {

  useEffect(()=> {

  }, [])
  
  const generateMapGrid = () => {
    
    return worldgrid.filter((geo, i) => i % 10000).map((r, i) => <MapDiv key = {i}>
     {
       r.filter((geo, i) => i % 10000).map((geo, j) => <Grid key={i + ','+ j} address={geo.toLowerCase()}></Grid>)
     }
    </MapDiv>);
  }
  return <MapWrapper> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;