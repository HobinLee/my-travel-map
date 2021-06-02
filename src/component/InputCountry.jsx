import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import InputResultList from './InputResultList';

const InputCountryWrap = styled.div`
  width: 100%;
  margin-bottom: 15px;
`

const UserInputWrap = styled.div`
  position: relative;
  width: 100%;

  & > input {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid var(--defaultColor);
    outline: none;
    background-color: var(--defaultColor);
    color: var(--textColor);
  }
`

const InputCountry = () => {
	const { isEdit, editCountry, editCount } = useSelector(state => state.map);
  const [inputData, setInputData] = useState("");
  const [isClickResult, setIsClickResult] = useState(false);

  useEffect(()=> {
    if(isEdit) {
      setInputData(editCountry);
      setIsClickResult(true);
    }
  }, [isEdit, editCount, editCountry])

	const onChangeInput = (e) => {
    setInputData(e.target.value);
  }

	return (
		<InputCountryWrap>
      <UserInputWrap>
        <input 
          type="text" 
          value={inputData} 
          onChange={onChangeInput}
          placeholder="국가명을 입력해주세요."
          disabled={isClickResult && true}
        />

        <InputResultList inputData={inputData} />
      </UserInputWrap>			
		</InputCountryWrap>
	)
}

export default InputCountry;