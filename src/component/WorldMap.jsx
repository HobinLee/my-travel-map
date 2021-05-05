import React, { useState, useEffect, memo } from 'react';
import worldgrid from './map.json';
import styled from 'styled-components';
import GridLand from './GridLand';
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
  
  useEffect(() => {
    let string = '';
    for (let i = 0 ; i < worldgrid.length ; i ++) {
      for (let j = 0 ; j < worldgrid[0].length ; j ++) {
        string += (worldgrid[i][j] + ' ');
      }
      string += '\n';
    }
    console.log(string);
  }, [])

  const onClickLand = (address) => {
    if(address === country) {
      console.log(country);
    }
  }
  
  const generateMapGrid = () => {
    return worldgrid.map((r, i) => <MapDiv key = {i}>
      {
        r.map((address, j) => {
          return (address !== "Sea") &&
            <GridLand
              key = {i + ','+ j}
              column = {j}
              address = {address}
              visited = {userListObj[address]}
              point = {country === address}
              setCountry = {setCountry}
            />
        })
     }
    </MapDiv>);
  }
  return <MapWrapper darkMode = {darkMode} onClick={onClickLand}>
          {generateMapGrid()}
         </MapWrapper>;
}

export default WorldMap;