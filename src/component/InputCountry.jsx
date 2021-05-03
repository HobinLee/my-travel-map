import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IoCreateOutline } from 'react-icons/io5';

import { userListUpdate, userInputUpdate, userListObjUpdate, userFocusOn, userCountUpdate } from '../store/modules/map';
import UserList from '../component/UserList';
import InputResultList from './InputResultList';

const InputCountryWrap = styled.div`
  width: 100%;
  margin-bottom: 15px;
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
    const changeWord = inputData.split(" ").map(item => {
      if(item.toLowerCase() === "of" || item.toLowerCase() === "and" || item.toLowerCase() === "the") {
        return item
      } else {
        return item[0].toUpperCase()+item.toLowerCase().slice(1, item.length)
      }
    }).join(" ");
    console.log(changeWord.length);
    console.log(filterData.includes(changeWord));

		if(inputData?.length === 0) {
			alert("1글자이상 입력해주세요");
			return;
		} 
    if(inputCount < 1) {
			alert("방문 횟수는 최소 1이상입니다.");
			return;
		} 
    if(!filterData.includes(changeWord)) {
      alert("해당하는 나라가 없습니다.");
      return;
    }

    setInputData("");
    setInputCount(1);
    setIsClickResult(false);

    if (userListObj[changeWord]) userListObj[changeWord] = parseInt(inputCount);
    else userListObj[changeWord] = parseInt(inputCount);
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
        <input 
          type="number"
          value={inputCount}
          onChange={onChangeCount}
          placeholder="방문횟수"
        />
        <WriteButton onClick={onClickButton}>
          <IoCreateOutline />
        </WriteButton>
      </UserCountWrap>			
		</InputCountryWrap>
	)
}

export default InputCountry;