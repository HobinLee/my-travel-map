import React, { useState } from 'react';
import mapArray from './mapArray.json';
import styled from 'styled-components';
import RowLand from './RowLand';
import { MemoizedSea } from './RowSea';
import { useSelector } from 'react-redux';
import InputCount from './InputCount';

import { userListObjUpdate } from '../store/modules/map';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

const MapWrapper = styled.div`
  width: auto;
  display: grid;
  grid-gap: 3px;
  grid-template-rows: repeat(80, 10px);
  filter: hue-rotate(${props => props.darkMode ? '-90deg':'90deg'} );
`
const MapDiv = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(180, 13px);
`

const InputCountWrap = styled.div`
  width: 250px;
  position: absolute;
  top: ${props => props.yPosition && `${props.yPosition}px`};
  left: ${props => props.xPosition && `${props.xPosition}px`};
  z-index: 50;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #000;

  & > span {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    max-width: 190px;
    white-space: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none; 

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & > button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: unset;
    outline: none;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`

const WorldMap = () => {
  const { darkMode } = useSelector(state => state.mode);
  const { userListObj } = useSelector(state => state.map);
  const [ country, setCountry ] = useState(null);

  const dispatch = useDispatch();
  const [ isLandClick, setIsLandClick ] = useState(false);
  const [ inputCount, setInputCount ] = useState("");
  const [ clickCountryName, setClickCountryName ] = useState("");
  const [ xPosition, setXPosition ] = useState(0);
  const [ yPosition, setYPosition ] = useState(0);


  const onClickLand = (e) => {
    if(country !== 'Sea') {
      setIsLandClick(true);
      setClickCountryName(country);
      setXPosition(e.clientX)
      setYPosition(e.clientY)
    } else {
      setIsLandClick(false);
    }
  }

  const onChangeCount = (e) => {
    setInputCount(e.target.value);
  }

  const onClickClose = () => {
    setIsLandClick(false);
  }

  const onClickButton = () => {
    if(inputCount < 1) {
			alert("방문 횟수는 최소 1이상입니다.");
			return;
		} 

    if (userListObj[clickCountryName]) userListObj[clickCountryName] = parseInt(inputCount);
    else userListObj[clickCountryName] = parseInt(inputCount);
    window.localStorage.setItem("visitedObj", JSON.stringify({
      ...userListObj
    }));

    dispatch(userListObjUpdate({...userListObj}));
    setInputCount(1);
    setIsLandClick(false);
  }

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

  return <>
    <MapWrapper darkMode = {darkMode} onClick={onClickLand}>
      {generateMapGrid()}
    </MapWrapper>
    {isLandClick &&
    <InputCountWrap xPosition = {xPosition} yPosition = {yPosition}>
      <span>
        국가명 : {clickCountryName}
      </span> 
      <InputCount 
        inputCount = {inputCount}
        onChangeCount = {onChangeCount}
        onClickButton = {onClickButton}
      />

      <button onClick={onClickClose}>
        <AiOutlineClose />
      </button>
    </InputCountWrap>}
  </>
}

export default WorldMap;