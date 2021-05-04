import React from 'react';
import styled from 'styled-components';
import { IoCreateOutline } from 'react-icons/io5';

const InputCountWrap = styled.div`
  display: flex;
  align-items: center;

  & > input {
    width: 100%;
    height: 30px;
    padding: 5px;
    border: 1px solid #00acee;
    outline: none;
  }
`

const WriteButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  padding: 5px;
  background-color: #00acee;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    font-size: 20px;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }
`

const InputCount = ({ inputCount, onChangeInput, onClickButton }) => {
  return (
    <InputCountWrap>
      <input 
        type="number"
        value={inputCount}
        onChange={onChangeInput}
        placeholder="방문횟수"
      />
      <WriteButton onClick={onClickButton}>
        <IoCreateOutline />
      </WriteButton>
    </InputCountWrap>
  )
}

export default InputCount;