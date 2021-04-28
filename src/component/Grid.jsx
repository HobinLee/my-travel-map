import React, {memo} from 'react';
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
  opacity: ${props => (props.point || props.visited) ? "1" : "0.3"};
`
/*
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
*/

const Grid = ({ address, visited, setCountry, point }) => {
  if (address === null) {
    return <Load>{address}</Load>;
  } else {
    return (address === 'Sea')
    ? 
      <Sea
        onMouseOver={() => setCountry(null)}
      >
      </Sea>
    : 
      <Land
        point={point}
        visited={visited}
        onMouseOver={() => setCountry(address)}
        >
      </Land>
  }
}

export default React.memo(Grid);