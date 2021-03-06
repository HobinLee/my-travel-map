import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RowLand from './RowLand';
import { MemoizedSea } from './RowSea';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import Draggable from 'react-draggable';
import UserCountryButtons from './UserCountryButtons';
import { updateHoverContry } from '../store/modules/map';

const MapWrapper = styled.div`
  width: auto;
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
  z-index: 55;
  padding: 15px;
  background-color: var(--modalColor);
  color: var(--textColor);
	border: 1px solid var(--pointColor);
  border-radius: 10px;

  &: hover {
    cursor: move;
  }  
 
  & > span {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 10px;
    max-width: 190px;
    white-space: wrap;
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


const WorldMapGrid = ({ finishLoading, mapRef }) => {
  const dispatch = useDispatch();
  const { userListObj } = useSelector(state => state.map);
  const [ mapArray, setMapArray] = useState(null);
  const [ country, setCountry ] = useState(null);
  const [ isLandClick, setIsLandClick ] = useState(false);
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
      finishLoading(true);
    }
  }, [mapArray]);

  const onClickLand = (e) => {
    console.log(mapRef.current.offsetWidth);

    if(country !== 'Sea') {
      setIsLandClick(true);
      setClickCountryName(country);
      const pos = getObjectPositionOnScreen(e.clientX, e.clientY);
      console.log(pos);
      setXPosition(pos.x);
      setYPosition(pos.y);
    } else {
      setClickCountryName(null); 
      setIsLandClick(false);
    }
  }

  const getObjectPositionOnScreen = (mouseX, mouseY) => {
    const obj = {
      x: 280,
      y: 180,
    };
    return {
      x: mouseX > (mapRef.current.offsetWidth - obj.x) ? (mapRef.current.offsetWidth - obj.x) : mouseX,
      y: mouseY > (mapRef.current.offsetHeight - obj.y) ? (mapRef.current.offsetHeight - obj.y) : mouseY,
    };
  }

  const onClickClose = () => {
    setIsLandClick(false);
    setClickCountryName(null);
  }
 
  const generateMapGrid = () => {
    if(!mapArray) return <></>;
    
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
              setCountry = {(c) => {
                dispatch(updateHoverContry(c));
                setCountry(c);
              }}
            />
          :
          <RowLand
              key = {i + ','+ j}
              column = {column - address[1]}
              address = {address[0]}
              visited = {userListObj[address[0]]}
              point = {(clickCountryName === address[0]) || (country === address[0])}
              length = {address[1]}
              setCountry = {(c) => {
                dispatch(updateHoverContry(c));
                setCountry(c);
              }}
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
    <Draggable
      handle=".cursor" 
      cancel=".no-cursor"
    > 
      <InputCountWrap xPosition = {xPosition} yPosition = {yPosition} className="cursor">
        <span className="cursor">
          {clickCountryName}
        </span> 
        <ButtonWrap className="no-cursor">
          <UserCountryButtons listItem = {clickCountryName} closeModal = { onClickClose } isModal = {true}/>
        </ButtonWrap>
      
        <button onClick={onClickClose} className="no-cursor">
          <CloseButton />
        </button>
      </InputCountWrap>
    </Draggable>}
  </>
}

export default React.memo(WorldMapGrid, (prev, next) => (prev.point === next.point) && (prev.visited === next.visited));

/*
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RowLand from './RowLand';
import { MemoizedSea } from './RowSea';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import Draggable from 'react-draggable';
import UserCountryButtons from './UserCountryButtons';
import { updateHoverContry } from '../store/modules/map';

const MapWrapper = styled.div`
  width: auto;
  padding: 15px;
  display: grid;
  grid-gap: 2px;
  grid-template-rows: repeat(80, 10px);
`
const MapDiv = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(180, 12px);
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


const WorldMapGrid = ({finishLoading}) => {
  const dispatch = useDispatch();
  const { userListObj } = useSelector(state => state.map);
  const [ mapArray, setMapArray] = useState(null);
  const [ country, setCountry ] = useState(null);
  const [ isLandClick, setIsLandClick ] = useState(false);
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
      finishLoading(true);
    }
  }, [mapArray]);

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
 
  const generateMapGrid = () => {
    if(!mapArray) return <></>;
    
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
              setCountry = {(c) => {
                dispatch(updateHoverContry(c));
                setCountry(c);
              }}
            />
          :
          <RowLand
              key = {i + ','+ j}
              column = {column - address[1]}
              address = {address[0]}
              visited = {userListObj[address[0]]}
              point = {(clickCountryName === address[0]) || (country === address[0])}
              length = {address[1]}
              setCountry = {(c) => {
                dispatch(updateHoverContry(c));
                setCountry(c);
              }}
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

export default React.memo(WorldMapGrid, (prev, next) => (prev.point === next.point) && (prev.visited === next.visited));
*/