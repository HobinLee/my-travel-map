import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const LabelWrapper = styled.div`
  position: absolute;
  background-color: var(--transparentColor);
  color: white;
  padding: 10px;
  border-radius: 10px;
  width: 200px;
  right: calc(50% - 100px);
  bottom: 50px;
  z-index: 50;
  text-align: center;
  font-weight: bolder;
`

const Label = () => {
  const { hoverCountry } = useSelector(state => state.map);

  return hoverCountry === 'Sea' ?
  <></>
  :
  <LabelWrapper>
    { hoverCountry }
  </LabelWrapper>
};

export default Label;