import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const LoadingScreen = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = () => {
  return <LoadingScreen>Hello. Loading . . .</LoadingScreen>
}

export default Loading;
