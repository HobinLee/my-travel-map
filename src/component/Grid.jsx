import React from 'react';
import styled from 'styled-components';

const Load = styled.div`
  background-color: #eee;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
const Sea = styled.div`
  background-color: #ABDCFC;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;

  &: hover > div {
    display: block;
  }

  & > div {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    border: 1px solid gray;
    z-index: 1;
  }
`
const Land = styled.div`
  background-color: #3C6B40;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;

  &: hover > div {
    display: block;
  }

  & > div {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    border: 1px solid gray;
    z-index: 1;
  }
`
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

const Grid = ({address}) => {

  if (address === null) {
    return <Load></Load>;
  } else {
    return (isWater(address))
    ? 
      <Sea>
        <div>{address}</div>
      </Sea>
    : 
      <Land>
        <div>{address}</div>
      </Land>
  }
}

export default Grid;