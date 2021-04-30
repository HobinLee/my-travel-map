import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IoCreateOutline } from 'react-icons/io5';

import { userListUpdate, userInputUpdate, userListObjUpdate, userFocusOn, userCountUpdate } from '../store/modules/map';
import UserList from '../component/UserList';
import InputResultList from './InputResultList';

const InputCountryWrap = styled.div`
	width: 20%;
	height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  & > div > button {
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
  }
`

const UserCountWrap = styled.div`
  width: 100%;
  display: ${props => props.isVisible === "on" ? "block" : "none"};
  margin-top: 10px;

  & > input {
    width: 100%;
    height: 30px;
    padding: 5px;
    border: 1px solid #00acee;
    outline: none;
  }
`

const InputWrap = styled.div`
  position: relative;
  width: 90%;

  & > input {
    width: 100%;
    height: 30px;
    padding: 5px;
    border: 1px solid #00acee;
    outline: none;
  }
`

const InputCountry = () => {
	const dispatch = useDispatch();
	const { userListObj } = useSelector(state => state.map);
  const { filterData } = useSelector(state => state.filter);
  const [inputData, setInputData] = useState("");
  const [inputCount, setInputCount] = useState("");

	const onChangeInput = (e) => {
    setInputData(e.target.value);
  }
  
  const onChangeCount = (e) => {
    setInputCount(e.target.value);
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
			<div>
        <InputWrap>
          <input 
            type="text" 
            value={inputData} 
            onChange={onChangeInput}
            onFocus={onFocusInput}
            placeholder="국가명을 입력해주세요."
          />
          <InputResultList inputData={inputData} setInputData={setInputData}/>
          <UserCountWrap isVisible={inputData?.length > 0 ? "on" : "off"}>
            <input 
              type="number"
              value={inputCount}
              onChange={onChangeCount}
              placeholder="방문횟수"
            />
          </UserCountWrap>
        </InputWrap>	
       	
				<button onClick={onClickButton}>
          <IoCreateOutline />
        </button>
			</div>
			<UserList />
		</InputCountryWrap>
	)
}

export default InputCountry;