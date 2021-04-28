import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { userListUpdate, userInputUpdate, userFocusOff, userFocusOn } from '../store/modules/map';
import UserList from '../component/UserList';
import InputResultList from './InputResultList';

const InputCountryWrap = styled.div`
	width: 20%;
	height: 100%;
`

const InputCountry = () => {
	const dispatch = useDispatch();
	const { userList, userInput } = useSelector(state => state.map);

	// const [inputText, setInputText] = useState("");

	const onChangeInput = (e) => {
		// setInputText(e.target.value);
		dispatch(userInputUpdate(e.target.value));
	}

	const onClickButton = () => {
		if(userInput?.length === 0) {
			alert("1글자이상 입력해주세요");
			return;
		} 
		dispatch(userInputUpdate(""));
		// setInputText("");

		const newList = [...userList, userInput];
		dispatch(userListUpdate(newList));

		const localData = JSON.parse(window.localStorage.getItem("visited"));
		if(localData) {
			window.localStorage.setItem("visited", JSON.stringify([...localData, userInput]));
		} else {
			window.localStorage.setItem("visited", JSON.stringify([userInput]));
		}	
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
            // onBlur={onBlurInput}
          />

          <InputResultList />
        </div>
			
				<button onClick={onClickButton}>추가하기</button>
			</div>
			<UserList />
		</InputCountryWrap>
	)
}

export default InputCountry;