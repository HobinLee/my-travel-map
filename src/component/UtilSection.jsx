import React from 'react';
import styled from 'styled-components';

import InputCountry from './InputCountry';
import UserList from './UserList';

const UtilSectionWrap = styled.div`
  width: ${props => props.fold ? "0" : "20%"};
  display: flex;
  flex-direction: column;
  padding: ${props => props.fold ? "0" : "10px"};
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  left: ${props => props.fold ? "10%" : "0%"};
  z-index: 10;
  min-width: ${props => props.fold ? "0" : "350px"};

  & > button {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }

  @media screen and (max-width: 780px) {
    width: ${props => props.fold ? "0" : "100%"};
  }
`


const UtilSection = ({ fold, onClickFold }) => {
  return (
    <>
      <UtilSectionWrap fold={fold}>
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