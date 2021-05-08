import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LoadingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color: ${props => props.darkMode ? '#fff' : '#333'};
  font-size: 40px;
  font-weight: bolder;
`
const Indication = styled.div`
  color: ${props => props.darkMode ? '#fff' : '#333'};
  font-size: 14px;
  text-align: center;
`
const ProgressCircle = styled.div `
  width: 10vw;
  height: 10vw;
`

export const LoadingScreen = ({ progress, darkMode }) => {
  return <LoadingDiv>
    <Title darkMode = {darkMode}>
      세계 여행 지도
    </Title>
    <Indication darkMode = {darkMode}>
      지도를 불러오는 중 입니다. 잠시만 기다려주세요
    </Indication>
    <ProgressCircle>
      <CircularProgressbar value={progress} text={`${progress}%`} />
    </ProgressCircle>
  </LoadingDiv>
}

export const Loading = React.memo(LoadingScreen);
