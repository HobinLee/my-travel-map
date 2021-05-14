import React, { useState } from 'react';
import styled from 'styled-components';
import { IoCreateOutline } from 'react-icons/io5';

const InputCountWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    & > input {
      width: 50px;
      height: 30px;
      padding: 5px;
      border: 1px solid #00acee;
      outline: none;
    }

    & > span {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #00acee;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }

  
`

const WriteButton = styled.button`
  width: 100%;
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

const InputCount = ({ inputCount, setInputCount, onChangeCount, onClickButton }) => {
  const onClickPlus = () => {
    if(parseInt(inputCount) >= 10) return;
    setInputCount(parseInt(inputCount) + 1);
  }

  const onClickMinus = () => {
    if(parseInt(inputCount) <= 0) return;
    setInputCount(parseInt(inputCount) - 1);
  }

  return (
    <InputCountWrap>
      <div>
        <span onClick={onClickMinus}>-</span>
        <input 
          type="number"
          value={inputCount}
          onChange={onChangeCount}
          disabled={true}
          min="0"
          max="10"
        />
        <span onClick={onClickPlus}>+</span>
      </div>
      <WriteButton onClick={onClickButton}>
        <IoCreateOutline />
      </WriteButton>
    </InputCountWrap>
  )
}

export default InputCount;