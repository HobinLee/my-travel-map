import React, { memo } from 'react';
import styled from 'styled-components';

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
  cursor: default;
  opacity: 0;
`
const Land = styled.div`
  background-color: #3C6B40;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  opacity: ${props => props.visited ? "1" : "0.3"};

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

const Grid = ({ address, visited }) => {
  const isWater = (address) => {
    return address.includes('sea')
            || address.includes('ocean')
            || address.includes(' bay')
            || address.includes('pond')
            || address.includes('lake')
            || address.includes('gulf')
            || address.includes('passages');
  }

  if (address === null) {
    return <Load></Load>;
  } else {
    return (isWater(address.toLowerCase()))
    ? 
      <Sea>
        <div>{address}</div>
      </Sea>
    : 
      <Land visited={visited}>
        <div>{address}</div>
      </Land>
  }
}

export default React.memo(Grid);