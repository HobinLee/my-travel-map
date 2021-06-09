import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Land from './Land';
import { MemoizedSea } from './Sea';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import Draggable from 'react-draggable';
import UserCountryButtons from './UserCountryButtons';
import { updateHoverContry } from '../store/modules/map';

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`
const MapDiv = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(180, 10px);
`

const InputCountWrap = styled.div`
  width: 250px;
  position: absolute;
  top: ${props => props.yPosition && `${props.yPosition}px`};
  left: ${props => props.xPosition && `${props.xPosition}px`};
  z-index: 1000;
  padding: 15px;
  background-color: var(--modalColor);
  color: var(--textColor);
	border: 1px solid var(--pointColor);
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


const WorldMapCanvas = ({finishLoading}) => {
  const dispatch = useDispatch();
  const { userListObj } = useSelector(state => state.map);
  const [ mapObject, setMapObject] = useState(null);
  const [ country, setCountry ] = useState(null);
  const [ isLandClick, setIsLandClick ] = useState(false);
  const [ clickCountryName, setClickCountryName ] = useState("");
  const [ xPosition, setXPosition ] = useState(0);
  const [ yPosition, setYPosition ] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    fetch('https://my-travel-map.s3.ap-northeast-2.amazonaws.com/mapObject.json')
      .then(res => res.json())
      .then(data => {
        setMapObject(data);
      })
      .catch(err => console.error(err))
  }, []);

  useEffect(() => {
    if (mapObject !== null) {
      finishLoading(true);
    }
  }, [mapObject]);

  const onClickLand = (e) => {
    if(country !== 'Sea') {
      setIsLandClick(true);
      setClickCountryName(country);
      setXPosition(e.clientX);
      setYPosition(e.clientY);
    } else {
      setClickCountryName(null); 
      setIsLandClick(false);
    }
  }

  const onClickClose = () => {
    setIsLandClick(false);
    setClickCountryName(null);
  }

  const drawWorld = () => {
    if (!mapObject) return <></>;

    return Object.keys(mapObject).map((country, index) => 
      <Land key={index} country={country} point = {true} visited={true} setCountry={setCountry} coords={mapObject[country]}></Land>
    );
  }
  
  return <>
    <MapWrapper onClick={onClickLand}>
      {drawWorld()}
    </MapWrapper>
    {isLandClick &&
    <Draggable> 
      <InputCountWrap xPosition = {xPosition} yPosition = {yPosition}>
        <span>
          {clickCountryName}
        </span> 
        <ButtonWrap>
          <UserCountryButtons listItem = {clickCountryName} closeModal = { onClickClose } isModal = {true}/>
        </ButtonWrap>
      
        <button onClick={onClickClose}>
          <CloseButton />
        </button>
      </InputCountWrap>
    </Draggable>}
  </>
}

export default React.memo(WorldMapCanvas, (prev, next) => (prev.point === next.point) && (prev.visited === next.visited));