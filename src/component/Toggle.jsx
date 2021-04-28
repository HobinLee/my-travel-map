import { useState } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  position: fixed;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: 4px solid #333;
  
  background-color: ${props => props.valid ? '#555' : '#ccc'};
  right: 10px;
  cursor: pointer;
  bottom: 10px;
  
  ${props => props.valid ? '& > div { left: 40px; }' : '& > div { left: 0px; }'}
`
const Handle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  transition: 0.5s;
`
const Toggle = ({value, onChangeToggle}) => {
  return <ToggleWrapper
            valid={value}
            onClick={onChangeToggle}
            selected={value}>
            <Handle/>
          </ToggleWrapper>
}

export default Toggle;