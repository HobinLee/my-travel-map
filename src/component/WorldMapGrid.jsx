import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RowLand from './RowLand';
import { MemoizedSea } from './RowSea';
import { useSelector } from 'react-redux';
import InputCount from './InputCount';

import { userListObjUpdate } from '../store/modules/map';
import { useDispatch } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import Draggable from 'react-draggable';
import UserCountryButtons from './UserCountryButtons';

const MapWrapper = styled.div`
  width: auto;
  padding: 15px;
  display: grid;
  grid-gap: 3px;
  grid-template-rows: repeat(80, 10px);
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
  background-color: var(--modalColor);
  color: var(--textColor);
  border-radius: 10px;

  &: active {
    cursor: move;
  }

  & > span {
    width: 100%;
    height: 30px;
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
const Label = styled.div`
  display: block;
  position: absolute;
  bottom: 10px;
  left: 5px;
  color: var(--textColor);
  background-color: var(--defaultColor);
  width: auto;
  height: 24px;
  padding: 4px 10px;
  border: 2px solid var(--textColor);
  z-index: 1;
  white-space: no-wrap;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;

  &  div > button > div > svg {
    font-size: 35px;
    margin: 10px;
  }

  &  div > button > div > span {
    color: var(--textColor);
  }
`

const CloseButton = styled(IoMdClose)`
  font-size: 20px;
  color: var(--textColor);
`


const WorldMapGrid = ({setProgress}) => {
  const { userListObj } = useSelector(state => state.map);
  const [ mapArray, setMapArray] = useState(null);
  const [ country, setCountry ] = useState(null);

  const dispatch = useDispatch();

  const [ isLandClick, setIsLandClick ] = useState(false);
  const [ inputCount, setInputCount ] = useState(0);
  const [ clickCountryName, setClickCountryName ] = useState("");
  const [ xPosition, setXPosition ] = useState(0);
  const [ yPosition, setYPosition ] = useState(0);
  
  useEffect(() => {
    fetch('https://my-travel-map.s3.ap-northeast-2.amazonaws.com/mapArray.json')
      .then(res => res.json())
      .then(data => {
        setMapArray(data);
      })
      .catch(err => console.error(err))
  }, []);

  useEffect(() => {
    if (mapArray !== null) {
      setProgress(100);
    }
  }, [mapArray]);

  const onClickLand = (e) => {
    if(country !== 'Sea') {
      setIsLandClick(true);
      setClickCountryName(country);
      setXPosition(e.clientX);
      setYPosition(e.clientY);
      userListObj[country] ? setInputCount(userListObj[country]) : setInputCount(0);
    } else {
      setClickCountryName(null); 
      setIsLandClick(false);
    }
  }

  const onChangeCount = (e) => {
    setInputCount(e.target.value);
  }

  const onClickClose = () => {
    setIsLandClick(false);
    setClickCountryName(null);
  }

  const onClickButton = () => { 
    setInputCount(0);
    setIsLandClick(false);
    setClickCountryName(null);

    if(inputCount === 0) {
      if(userListObj[clickCountryName]) {
        delete userListObj[clickCountryName];
      } else {
        return;
      }
    } else {
      if (userListObj[clickCountryName]) userListObj[clickCountryName] = parseInt(inputCount);
      else userListObj[clickCountryName] = parseInt(inputCount);
    }

    window.localStorage.setItem("visitedObj", JSON.stringify({
      ...userListObj
    }));

    dispatch(userListObjUpdate({...userListObj}));
  }

  const onDragName = () => {
    console.log("hio");
  }

  const generateMapGrid = () => {
    if(!mapArray) return <></>;
    let start = new Date();
    return mapArray.map((r, i) => {
      let column = 0;
      return <MapDiv key = {i}>
      {
        r.map((address, j) => {
          column += address[1];
          let finish = new Date();
          if(i === mapArray.length - 1 && j === r.length - 1)
          console.log(finish.getTime() - start.getTime());
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
              point = {(clickCountryName === address[0]) || (country === address[0])}
              length = {address[1]}
              setCountry = {setCountry}
            />
        })
     }
    </MapDiv>
    });
  }
  
  return <>
    <MapWrapper onClick={onClickLand}>
      {generateMapGrid()}
    </MapWrapper>
    {isLandClick &&
    <Draggable> 
      <InputCountWrap xPosition = {xPosition} yPosition = {yPosition}>
        <span onDrag={onDragName}>
          {clickCountryName}
        </span> 
        {/* <InputCount 
          inputCount = {inputCount}
          onChangeCount = {onChangeCount}
          onClickButton = {onClickButton}
          setInputCount = {setInputCount}
        /> */}
        <ButtonWrap>
          <UserCountryButtons listItem = {clickCountryName} closeModal = { onClickClose } isModal = {true}/>
        </ButtonWrap>
      
        <button onClick={onClickClose}>
          <CloseButton />
        </button>
      </InputCountWrap>
    </Draggable>}
    {
      (country && country !== 'Sea') ?
      <Label className='Label'>
        {country}
      </Label>
      :
      <></>
    }
  </>
}

export default React.memo(WorldMapGrid, (prev, next) => (prev.point === next.point) && (prev.visited === next.visited));