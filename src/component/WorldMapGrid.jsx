import React, { useState, useEffect, memo } from 'react';
import mapArray from './mapArray.json';
import styled from 'styled-components';
import RowLand from './RowLand';
import { MemoizedSea } from './RowSea';
import { useSelector } from 'react-redux';

const MapWrapper = styled.div`
  width: auto;
  display: grid;
  grid-gap: 3px;
  grid-template-rows: repeat(80, 10px);
  filter: hue-rotate(${props => props.darkMode ? '-':''} 90deg);
`
const MapDiv = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(180, 13px);
`

const Land = styled.div`
  grid-area: land${props => props.i};
  background-color: #3C6B40;
  width: 100%;
  height: 100%;
`

const WorldMapGrid = () => {
  const { darkMode } = useSelector(state => state.mode);
  const [ world, setWorld ] = useState(null);
  const { userListObj } = useSelector(state => state.map);
  const [ country, setCountry ] = useState(null);
  
  const generateMapGrid = () => {
    return mapArray.map((r, i) => {
      let column = 0;
      return <MapDiv key = {i}>
      {
        r.map((address, j) => {
          column += address[1];
          return (address[0] === 'Sea') ?
          <MemoizedSea
              key = {i + ','+ j}
              column = {column - address[1]}
              point = {country === address[0]}
              length = {address[1]}
              setCountry = {setCountry}
            />
          :
          <RowLand
              key = {i + ','+ j}
              column = {column - address[1]}
              address = {address[0]}
              visited = {userListObj[address[0]]}
              point = {country === address[0]}
              length = {address[1]}
              setCountry = {setCountry}
            />
        })
     }
    </MapDiv>
    });
  }
  return <MapWrapper darkMode = {darkMode}>
      {generateMapGrid()}
    </MapWrapper>;
}

export default WorldMapGrid;