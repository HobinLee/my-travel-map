import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputCountryWrap = styled.div`
	width: 20%;
	height: 100%;
	box-shadow: -2px 0px 2px #eee;
`

const InputCountry = () => {
	const [inputText, setInputText] = useState("");

	const onChangeInput = (e) => {
		setInputText(e.target.value);
	}

	const onClickButton = () => {
		console.log(inputText)
		setInputText("");
	}

	return (
		<InputCountryWrap>
			<input 
				type="text" 
				value={inputText} 
				onChange={onChangeInput}
			/>
			<button onClick={onClickButton}>추가하기</button>
		</InputCountryWrap>
	)
}

export default InputCountry;