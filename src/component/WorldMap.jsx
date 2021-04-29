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
  //const { userList } = useSelector(state => state.map);
  const [ country, setCountry ] = useState('Sea');

  const generateMapGrid = () => {
    return worldgrid.map((r, i) => <MapDiv key = {i}>
     {
       r.map((geo, j) => {
        //if(userList.includes(geo)) {
        //  return <Grid key={i + ','+ j} address={geo} visited={"true"} point = {country === geo} setCountry={setCountry}></Grid>
        //} else {
          return <Grid key={i + ','+ j} address={geo} point = {country === geo} setCountry={setCountry}></Grid>
        //}
       })
     }
    </MapDiv>);
  }
  return <MapWrapper> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;