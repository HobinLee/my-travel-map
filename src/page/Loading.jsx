import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LoadingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${props => props.darkMode ? '#ddd' : '#222'};
  gap: 30px;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: bolder;
`
const Indication = styled.div`
  font-size: 14px;
  text-align: center;
`
const ProgressCircle = styled.div `
  width: 10vw;
  height: 10vw;
`

export const LoadingScreen = ({ progress, darkMode }) => {
  return <LoadingDiv darkMode = {darkMode}>
    <Title>
      여행 기록 세계 지도
    </Title>
    <Indication>
      지도를 불러오는 중 입니다. 잠시만 기다려주세요
    </Indication>
    <ProgressCircle>
      <CircularProgressbar value={progress} text={`${progress}%`} />
    </ProgressCircle>
  </LoadingDiv>
}

export const Loading = React.memo(LoadingScreen);
