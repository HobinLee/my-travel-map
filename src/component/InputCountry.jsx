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
	const { userListObj } = useSelector(state => state.map);
  const [inputData, setInputData] = useState("");
  const [inputCount, setInputCount] = useState(1);

	const onChangeInput = (e) => {
    setInputData(e.target.value);
  }
  
  const onChangeCount = (e) => {
    setInputCount(e.target.value);
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

    setInputData("");
    setInputCount(1);

    const localDataOjb = JSON.parse(window.localStorage.getItem("visitedObj"));
    if (userListObj[inputData]) userListObj[inputData] = parseInt(inputCount);
    else userListObj[inputData] = parseInt(inputCount);
    window.localStorage.setItem("visitedObj", JSON.stringify({
      ...localDataOjb,
      ...userListObj
    }));
  }
  
  const onFocusInput = () => {
    dispatch(userFocusOn());
  }

	return (
		<InputCountryWrap>
			<div>
        <InputWrap>
          <input 
            type="text" 
            value={inputData} 
            onChange={onChangeInput}
            onFocus={onFocusInput}
          />
          <InputResultList inputData={inputData} setInputData={setInputData}/>
          <UserCountWrap isVisible={inputData?.length > 0 ? "on" : "off"}>
            <input 
              type="number"
              value={inputCount}
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