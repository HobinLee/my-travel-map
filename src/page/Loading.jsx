import React, { useEffect, memo } from 'react';
import styled from 'styled-components';

const LoadingDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: var(--backgroundColor);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color: var(--textColor);
  font-size: 40px;
  font-weight: bolder;
`
const Indication = styled.div`
  color: var(--textColor);
  font-size: 14px;
  text-align: center;
`
const ProgressCircle = styled.div `
  width: 10vw;
  height: 10vw;
`

export const LoadingScreen = () => {
  return <LoadingDiv>
    <Title>
      세계 여행 지도
    </Title>
    <Indication>
      지도를 불러오는 중 입니다. 잠시만 기다려주세요
    </Indication>
  </LoadingDiv>
}

export const Loading = React.memo(LoadingScreen);
