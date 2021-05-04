import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { userListObjUpdate, userFocusOn } from '../store/modules/map';
import InputResultList from './InputResultList';
import InputCount from './InputCount';

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
    padding: 5px;
    border: 1px solid #00acee;
    outline: none;
  }
`

const UserCountWrap = styled.div`
  width: 100%;
  display: ${props => props.isVisible === "on" ? "flex" : "none"};
  align-items: center;
  margin-top: 10px;

  & > input {
    width: 100%;
    height: 30px;
    padding: 5px;
    border: 1px solid #00acee;
    outline: none;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`

const InputCountry = () => {
	const dispatch = useDispatch();
	const { userListObj } = useSelector(state => state.map);
  const { filterData } = useSelector(state => state.filter);
  const [inputData, setInputData] = useState("");
  const [inputCount, setInputCount] = useState("");
  const [isClickResult, setIsClickResult] = useState(false);

	const onChangeInput = (e) => {
    setInputData(e.target.value);
  }
  
  const onChangeCount = (e) => {
    setInputCount(e.target.value);
  }

  const onClickCloseButton = () => {
    setInputData("");
    setInputCount("");
    setIsClickResult(false);
  }

	const onClickButton = () => {
		if(inputData?.length === 0) {
			alert("1글자이상 입력해주세요");
			return;
		} 
    if(inputCount < 1) {
			alert("방문 횟수는 최소 1이상입니다.");
			return;
		} 
    if(!filterData.includes(inputData)) {
      alert("해당하는 나라가 없습니다.");
      return;
    }

    setInputData("");
    setInputCount(1);
    setIsClickResult(false);

    if (userListObj[inputData]) userListObj[inputData] = parseInt(inputCount);
    else userListObj[inputData] = parseInt(inputCount);
    window.localStorage.setItem("visitedObj", JSON.stringify({
      ...userListObj
    }));

    dispatch(userListObjUpdate({...userListObj}));
  }
   
  
  const onFocusInput = () => {
    dispatch(userFocusOn());
  }

	return (
		<InputCountryWrap>
      <UserInputWrap>
        <input 
          type="text" 
          value={inputData} 
          onChange={onChangeInput}
          onFocus={onFocusInput}
          placeholder="국가명을 입력해주세요."
          disabled={isClickResult && true}
        />
        {isClickResult && 
          <CloseButton onClick={onClickCloseButton}>
            x
          </CloseButton>
        }
        <InputResultList inputData={inputData} setInputData={setInputData} setIsClickResult={setIsClickResult}/>
      </UserInputWrap>
      
      <UserCountWrap isVisible={isClickResult ? "on" : "off"}>
        <InputCount 
          inputCount={inputCount}
          onChangeCount={onChangeCount}
          onClickButton={onClickButton}
        />
      </UserCountWrap>			
		</InputCountryWrap>
	)
}

export default InputCountry;