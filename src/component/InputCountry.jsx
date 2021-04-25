import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { userListAdd } from '../store/modules/map';
import UserList from '../component/UserList';

const InputCountryWrap = styled.div`
	width: 20%;
	height: 100%;
	box-shadow: -2px 0px 2px #eee;
`

const InputCountry = () => {
	const dispatch = useDispatch();

	const [inputText, setInputText] = useState("");

	const onChangeInput = (e) => {
		setInputText(e.target.value);
	}

	const onClickButton = () => {
		setInputText("");
		dispatch(userListAdd(inputText));
	}

	return (
		<InputCountryWrap>
			<div>
				<input 
					type="text" 
					value={inputText} 
					onChange={onChangeInput}
				/>
				<button onClick={onClickButton}>추가하기</button>
			</div>
		

			<UserList />
		</InputCountryWrap>
	)
}

export default InputCountry;