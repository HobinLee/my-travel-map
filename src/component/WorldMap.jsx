import React, { useState, useEffect, memo } from 'react';
import worldgrid from './map.json';
import styled from 'styled-components';
import Grid from './Grid';
import { useSelector } from 'react-redux';

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
  const { userListObj } = useSelector(state => state.map);
  const [ country, setCountry ] = useState(null);
  
  const generateMapGrid = () => {
    return worldgrid.map((r, i) => <MapDiv key = {i}>
     {
       r.map((geo, j) => {
          return <Grid
                  key = {i + ','+ j}
                  address = {geo}
                  visited = {userListObj[geo] ? userListObj[geo] : 0}
                  point = {country === geo}
                  setCountry={setCountry}
                 />
       })
     }
    </MapDiv>);
  }
  return <MapWrapper> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;