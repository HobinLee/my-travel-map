import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { BsBoxArrowInRight } from 'react-icons/bs';

import InputCountry from './InputCountry';
import { userListObjUpdate } from '../store/modules/map';

const foldMove = keyframes`
  0% {
    left: 10px;
  }

  100% {
    left: 30px;
  }
`

const UtilSectionWrap = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.fold ? "-350px" : "0"};
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 50px 10px 0;
  height: 100%;
  overflow: hidden;
  transition: 0.3s;
  z-index: 100;
  background-color: var(--backgroundColor);

  & > button {
    position: absolute;
    left: 10px;
    top: 10px;
    background: unset;
    border: none;
    font-size: 25px;
    color: var(--textColor);

    &:hover {
      cursor: pointer;
      animation: ${foldMove} 0.6s infinite alternate;
    }

    &:active {
      color: #777;
    }
  }

  @media screen and (max-width: 780px) {
    position: fixed;
    height: 100%;
    min-width: 0;
    width: ${props => props.fold ? "0" : "100vw"};
    z-index: 1000;
  }
`


const UtilSection = ({ fold, onClickFold }) => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const localData = JSON.parse(window.localStorage.getItem("visitedObj"));
    dispatch(userListObjUpdate(localData));
  })

  return (
    <>
      <UtilSectionWrap fold={fold}>
        <InputCountry />
        <button onClick={onClickFold}>
          <BsBoxArrowInRight />
        </button>
      </UtilSectionWrap>
    </>
  )
}

export default UtilSection;