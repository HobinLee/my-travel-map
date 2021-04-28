import React, { useState, useEffect } from 'react';
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
  const { userList } = useSelector(state => state.map);
  useEffect(()=> {
    // const _localData = JSON.parse(window.localStorage.getItem("visited"));
  }, [])
  
  const generateMapGrid = () => {
    return worldgrid.filter((geo, i) => i % 10000).map((r, i) => <MapDiv key = {i}>
     {
       r.filter((geo, i) => i % 10000).map((geo, j) => {
        if(userList.includes(geo)) {
          return <Grid key={i + ','+ j} address={geo} visited={"true"}></Grid>
        } else {
          return <Grid key={i + ','+ j} address={geo}></Grid>
        }
        
       })
     }
    </MapDiv>);
  }
  return <MapWrapper> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;