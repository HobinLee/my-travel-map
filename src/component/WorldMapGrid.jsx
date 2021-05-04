import React, { useState, useEffect, memo } from 'react';
import worldgrid from './map.json';
//import mapText from './mapText.json';
import styled from 'styled-components';
import GridLand from './GridLand';
import { useSelector } from 'react-redux';
const a = `grid-template-areas: " sea sea sea sea land . . .
            sea sea sea sea land . . ."`;
const MapWrapper = styled.div`
  width: auto;
  display: grid;
  grid-template-rows: repeat(80, 10px);
  grid-template-columns: repeat(180, 10px);
  gap: 3px;
  ${a};
  filter: hue-rotate(${props => props.darkMode ? '-':''}90deg);
`
const Land = styled.div`
  grid-area: land;
  background-color: #3C6B40;
  width: 100%;
  height: 100%;
`
const Sea = styled.div`
  grid-area: sea;
  background-color: white;
  width: 100%;
  height: 100%;
`


const WorldMapGrid = () => {
  const { darkMode } = useSelector(state => state.mode);
  const { userListObj } = useSelector(state => state.map);
  const [ country, setCountry ] = useState(null);
  
  useEffect(() => {
    //console.log(mapText);
  }, [])
  
  return <MapWrapper darkMode = {darkMode}> 
    <Land/>
    <Sea/>
  </MapWrapper>;
}

export default WorldMapGrid;