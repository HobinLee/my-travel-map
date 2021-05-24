import React, { useState, useEffect } from 'react';
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
  }
`

const PlusButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.btnPlusDisabled ? "#eee" : "#00acee"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  

  &:hover {
    cursor: ${props => props.btnPlusDisabled ? "unset" : "pointer"};
  }
`

const MinusButton = styled(PlusButton)`
  background-color: ${props => props.btnMinusDisabled ? "#eee" : "#00acee"};
  color: #fff;

  &:hover {
    cursor: ${props => props.btnMinusDisabled ? "unset" : "pointer"};
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
  const [btnPlusDisabled, setBtnPlusDisabled] = useState(false);
  const [btnMinusDisabled, setBtnMinusDisabled] = useState(false);

  useEffect(()=> {
    if (inputCount === 10) {
      setBtnPlusDisabled(true);
      setBtnMinusDisabled(false);
    } else if (inputCount === 0) {
      setBtnMinusDisabled(true);
      setBtnPlusDisabled(false);
    } else {
      setBtnMinusDisabled(false);
      setBtnPlusDisabled(false);
    }

  }, [inputCount])

  const onClickPlus = () => {
    if(parseInt(inputCount) === 10) {
    } else { 
      setInputCount(parseInt(inputCount) + 1);
    }
  }

  const onClickMinus = () => {
    if(parseInt(inputCount) === 0) {
    } else {
      setInputCount(parseInt(inputCount) - 1);
    }
    
  }

  return (
    <InputCountWrap>
    {console.log(btnMinusDisabled,btnPlusDisabled)}
      <div>
        <MinusButton onClick={onClickMinus} btnMinusDisabled={btnMinusDisabled}>-</MinusButton>
        <input 
          type="number"
          value={inputCount}
          onChange={onChangeCount}
          disabled={true}
          min="0"
          max="10"
        />
        <PlusButton onClick={onClickPlus} btnPlusDisabled={btnPlusDisabled}>+</PlusButton>
      </div>
      <WriteButton onClick={onClickButton}>
        <IoCreateOutline />
      </WriteButton>
    </InputCountWrap>
  )
}

export default InputCount;