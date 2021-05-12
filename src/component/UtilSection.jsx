import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import InputCountry from './InputCountry';
import UserList from './UserList';

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
  z-index: 10;
  background-color: ${props => props.darkMode ? "#555" : "#fff"};
 
  & > button {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }

  @media screen and (max-width: 780px) {
    position: fixed;
    height: 100%;
    width: ${props => props.fold ? "0" : "100vw"};
  }
`


const UtilSection = ({ fold, onClickFold }) => {
  const { darkMode } = useSelector(state => state.mode);

  return (
    <>
      <UtilSectionWrap fold={fold} darkMode={darkMode}>
        <InputCountry />
        <UserList />
        <button onClick={onClickFold}>
          접기
        </button>
      </UtilSectionWrap>
    </>
  )
}

export default UtilSection;