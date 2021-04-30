import React, { useState, useEffect, memo } from 'react';
import worldgrid from './map.json';
import styled from 'styled-components';
import GridLand from './GridLand';
import { MemoizedGridSea } from './GridSea';
import { useSelector } from 'react-redux';

const MapWrapper = styled.div`
  width: auto;
  display: grid;
  grid-template-rows: repeat(80, 10px);
  gap: 3px;
  filter: hue-rotate(${props => props.darkMode ? '-':''}90deg);
`
const MapDiv = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(180, 10px);
  gap: 3px
`


const WorldMap = () => {
  const { darkMode } = useSelector(state => state.mode);
  const { userListObj } = useSelector(state => state.map);
  const [ country, setCountry ] = useState(null);
  
  const generateMapGrid = () => {
    return worldgrid.map((r, i) => <MapDiv key = {i}>
      {
        r.map((geo, j) => {
          return (geo === "Sea") ?
            <MemoizedGridSea
              key = {i + ','+ j}
              address = {geo}
              point = {country === geo}
              setCountry = {setCountry}
            />
            :
            <GridLand
              key = {i + ','+ j}
              address = {geo}
              visited = {userListObj[geo]}
              point = {country === geo}
              setCountry = {setCountry}
            />
        })
     }
    </MapDiv>);
  }
  return <MapWrapper darkMode = {darkMode}> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;