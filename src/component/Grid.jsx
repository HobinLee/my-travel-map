import styled from 'styled-components';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

const Load = styled.div`
  background-color: #eee;
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 50%;
`
const Sea = styled.div`
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background-color: ${props => props.darkMode ? `#333`:`white`};

  &: hover > div {
    display: block;
  }

  & > div {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    border: 2px solid gray;
    z-index: 1;
  }
`
const Land = styled.div`
  background-color: #3C6B40;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 1px #3C6B40;

  &: hover > div {
    display: block;
  }

  & > div {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    border: 2px solid gray;
    z-index: 1;
  }
`

const Grid = ({address}) => {
  const { darkMode } = useSelector(state => state.mode);

  const isWater = (address) => {
    return address.includes('sea')
            || address.includes('ocean')
            || address.includes(' bay')
            || address.includes('pond')
            || address.includes('lake')
            || address.includes('gulf')
            || address.includes('st helena')
            || address.includes('passages')
            || address.includes('polynesia')
            || address.includes('kiribati')
            || address.includes('cook island');
  }

  if (address === null) {
    return <Load></Load>;
  } else {
    return (isWater(address))
    ? 
      <Sea darkMode={darkMode}>
        <div>{address}</div>
      </Sea>
    : 
      <Land>
        <div>{address}</div>
      </Land>
  }
}

export default Grid;