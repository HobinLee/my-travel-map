import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import InputCountry from './InputCountry';
import UserList from './UserList';
import { userListObjUpdate } from '../store/modules/map';

const UtilSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.fold ? "0" : "350px"};
  padding: ${props => props.fold ? "0" : "10px"};
  position: relative;
  top: 0;
  right: ${props => props.fold ? "-350px;" : "0"};
  height: 100%;
  overflow: hidden;
  transition: 0.3s;
  z-index: 60;
  background-color: ${props => props.darkMode ? "#555" : "#fff"};

  & > button {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }

  @media screen and (max-width: 780px) {
    position: fixed;
    height: 100%;
    min-width: 0;
    width: ${props => props.fold ? "0" : "100vw"};
  }
`


const UtilSection = ({ fold, onClickFold }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.mode);

  useEffect(()=> {
    const localData = JSON.parse(window.localStorage.getItem("visitedObj"));
    dispatch(userListObjUpdate(localData));
  })

  return (
    <>
      <UtilSectionWrap fold={fold} darkMode={darkMode}>
        <InputCountry />
        {/* <UserList /> */}
        <button onClick={onClickFold}>
          접기
        </button>
      </UtilSectionWrap>
    </>
  )
}

export default UtilSection;