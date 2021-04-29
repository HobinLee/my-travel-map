import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { userListUpdate, userInputUpdate, userFocusOn, userCountUpdate } from '../store/modules/map';
import UserList from '../component/UserList';
import InputResultList from './InputResultList';

const InputCountryWrap = styled.div`
	width: 20%;
	height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  & > div > button {
    border: none;
  }
`

const UserCountWrap = styled.div`
  display: ${props => props.isVisible === "on" ? "block" : "none"};
`

const InputWrap = styled.div`
  position: relative;
`

const InputCountry = () => {
	const dispatch = useDispatch();
	const { userInput, userCount, userListObj } = useSelector(state => state.map);

	const onChangeInput = (e) => {
		dispatch(userInputUpdate(e.target.value));
  }
  
  const onChangeCount = (e) => {
    dispatch(userCountUpdate(e.target.value));
  }

	const onClickButton = () => {
		if(userInput?.length === 0) {
			alert("1글자이상 입력해주세요");
			return;
		} 
    if(userCount < 1) {
			alert("방문 횟수는 최소 1이상입니다.");
			return;
		} 
    dispatch(userInputUpdate(""));
    dispatch(userCountUpdate(1));

    const localDataOjb = JSON.parse(window.localStorage.getItem("visitedObj"));
    if (userListObj[userInput]) userListObj[userInput] = parseInt(userCount);
    else userListObj[userInput] = parseInt(userCount);
    window.localStorage.setItem("visitedObj", JSON.stringify({
      ...localDataOjb,
      ...userListObj
    }));
  }
  
  const onFocusInput = () => {
    console.log("포커스");
    dispatch(userFocusOn());
  }

	return (
		<InputCountryWrap>
			<div>
        <InputWrap>
          <input 
            type="text" 
            value={userInput} 
            onChange={onChangeInput}
            onFocus={onFocusInput}
          />
          <InputResultList />
          <UserCountWrap isVisible={userInput?.length > 0 ? "on" : "off"}>
            <input 
              type="number"
              value={userCount}
              onChange={onChangeCount}
            />
          </UserCountWrap>
        </InputWrap>	
       	
				<button onClick={onClickButton}>추가</button>
			</div>
			<UserList />
		</InputCountryWrap>
	)
}

export default InputCountry;