import React, { useState, useEffect } from 'react';
import worldgrid from './map.json';
import styled from 'styled-components';
import GridRow from './GridRow';
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
  //const { userListObj } = useSelector(state => state.map);
  const [ country, setCountry ] = useState(null);
  const [ world, setWorld ] = useState({});
  useEffect(()=> {
    const coords = {};
  
    worldgrid.forEach((row, lat) => {
      row.forEach(geo => {
        if(coords[geo] && (coords[geo].indexOf(lat) === -1)) {
          coords[geo].push(lat);
        } else {
          coords[geo] = [lat];
        }
      })
    })
    console.log(coords);
    setWorld(coords);
  }, [])
  
  const generateMapGrid = () => {
    return worldgrid.map((geo, i) => 
      <GridRow update = {world[country] ? (world[country].indexOf(i) !== -1) : false} key={i} geo={geo} country = {country} setCountry={setCountry}></GridRow>
        //if(userListObj[geo]) {
        //  return <Grid key={i + ','+ j} address={geo} visited={userListObj[geo]} point = {country === geo} setCountry={setCountry}></Grid>
        //} else {
          //return <Grid ></Grid>
        //}});
    )}

  return <MapWrapper> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;