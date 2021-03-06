import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { BsBoxArrowInLeft } from 'react-icons/bs';

import UtilSection from '../component/UtilSection';
import WorldMapCanvas from '../component/WorldMapCanvas';
import WorldMapGrid from '../component/WorldMapGrid';
import WorldMapSVG from '../component/WorldMapSVG';
import Label from '../component/Label';
import Header from '../component/Header';

const foldMove = keyframes`
  0% {
    right: 20px;
  }

  100% {
    right: 40px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`

const MapContainer = styled.div`
  width:  100%;
  height: 100vh;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
`

const OpenButton = styled.button`
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 5;
  font-size: 25px;
  background: unset;
  border: none;
  color: var(--textColor);


  &:hover {
    cursor: pointer;
    animation: ${foldMove} 0.6s infinite alternate;
  }

  &:active {
    color: #eee;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width:  ${props => props.fold ? "100%" : "calc(100% - 350px)"};
  transition: 0.3s;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`

const Main = ({finishLoading}) => {
  const [fold, setFold] = useState(false);
  const mapRef = useRef();

  const onClickFold = () => {
    setFold(!fold);
  }

  return (
    <Wrapper>
      <ContentWrapper fold={fold}>
        <Header />
        <MapContainer fold={fold} ref={mapRef}>
          <WorldMapGrid finishLoading = {finishLoading} mapRef={mapRef}/>
        </MapContainer>
        <Label/>
      </ContentWrapper>
     
      <UtilSection fold={fold} onClickFold={onClickFold}/>

      {fold && <OpenButton onClick={onClickFold}>
        <BsBoxArrowInLeft />
      </OpenButton>}
    </Wrapper>
  )
}

export default React.memo(Main);