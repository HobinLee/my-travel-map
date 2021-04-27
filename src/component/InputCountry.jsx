import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { userListUpdate } from '../store/modules/map';
import UserList from '../component/UserList';
import InputResultList from './InputResultList';

const InputCountryWrap = styled.div`
	width: 20%;
	height: 100%;
	box-shadow: -2px 0px 2px #eee;
`

const InputCountry = () => {
	const dispatch = useDispatch();
	const { userList } = useSelector(state => state.map);

	const [inputText, setInputText] = useState("");

	const onChangeInput = (e) => {
		setInputText(e.target.value);
	}

	const onClickButton = () => {
		if(inputText?.length === 0) {
			alert("1글자이상 입력해주세요");
			return;
		} 
		setInputText("");

		const newList = [...userList, inputText];
		dispatch(userListUpdate(newList));

		const localData = JSON.parse(window.localStorage.getItem("visited"));
		if(localData) {
			window.localStorage.setItem("visited", JSON.stringify([...localData, inputText]));
		} else {
			window.localStorage.setItem("visited", JSON.stringify([inputText]));
		}	
	}

	return (
		<InputCountryWrap>
			<div>
        <div>
          <input 
            type="text" 
            value={inputText} 
            onChange={onChangeInput}
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