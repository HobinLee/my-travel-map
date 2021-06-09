import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 800px;
  cursor: pointer;
`;

const Land = ({ country, coords, visited, setCountry, point }) => {
  const drawDots = () => {
    return coords.map((coord, index) => {
      return <circle key = {index} cx={coord[1]*10} cy={coord[0]*10} r="4" fill="var(--defaultColor)" onMouseOver = {() => setCountry(country)}/>
    })
  };
  return <SVG>
    {drawDots()}
  </SVG>;
}

export default React.memo(Land, (prev, next) => (prev.point === next.point) && (prev.visited === next.visited));