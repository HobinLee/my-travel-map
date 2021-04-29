import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { userListUpdate, userInputUpdate, userFocusOn, userCountUpdate } from '../store/modules/map';
import UserList from '../component/UserList';
import InputResultList from './InputResultList';

const InputCountryWrap = styled.div`
	width: 20%;
	height: 100%;
`

const UserCountWrap = styled.div`
  display: ${props => props.isVisible === "on" ? "block" : "none"};
`

const InputCountry = () => {
	const dispatch = useDispatch();
	const { userList, userInput, userCount, userListObj } = useSelector(state => state.map);

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
    dispatch(userInputUpdate(""));
    dispatch(userCountUpdate(1));

		// const newList = [...userList, userInput];
		

    // const localData = JSON.parse(window.localStorage.getItem("visited"));

    const localDataOjb = JSON.parse(window.localStorage.getItem("visitedObj"));
    if (userListObj[userInput]) userListObj[userInput] = parseInt(userCount);
    else userListObj[userInput] = parseInt(userCount);
    window.localStorage.setItem("visitedObj", JSON.stringify({
      ...localDataOjb,
      ...userListObj
    }));

    // dispatch(userListUpdate( Object.keys(userListObj)) );
    // window.localStorage.setItem("visited", JSON.stringify(Object.keys(userListObj)));

		// if(localData) {
		// 	window.localStorage.setItem("visited", JSON.stringify([...localData, userInput]));
		// } else {
		// 	window.localStorage.setItem("visited", JSON.stringify([userInput]));
		// }	
  }
  
  const onFocusInput = () => {
    console.log("포커스");
    dispatch(userFocusOn());
  }

  // const onBlurInput = () => {
  //   console.log("떼짐");
  //   dispatch(userFocusOff());
  // }

	return (
		<InputCountryWrap>
			<div>
        <div>
          <input 
            type="text" 
            value={userInput} 
            onChange={onChangeInput}
            onFocus={onFocusInput}
          />

        <UserCountWrap isVisible={userInput?.length > 0 ? "on" : "off"}>
          <input 
            type="number"
            value={userCount}
            onChange={onChangeCount}
          />
        </UserCountWrap>

          <InputResultList />
        </div>		
				<button onClick={onClickButton}>추가하기</button>

       
			</div>
			<UserList />
		</InputCountryWrap>
	)
}

export default InputCountry;