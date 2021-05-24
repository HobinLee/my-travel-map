import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import UtilSection from '../component/UtilSection';
import WorldMapGrid from '../component/WorldMapGrid';
import WorldMapSVG from '../component/WorldMapSVG';
import Header from '../component/Header';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`

const MapContainer = styled.div`
  width:  100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  transition: 0.3s;
`

const OpenButton = styled.button`
  position: fixed;
  top: 5px;
  right: 20px;
  z-index: 5;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:  ${props => props.fold ? "100%" : "calc(100% - 350px)"};
`

const Main = ({setProgress}) => {
  const [fold, setFold] = useState(false);

  const onClickFold = () => {
    setFold(!fold);
  }

  return (
    <Wrapper>
      <ContentWrapper fold={fold}>
        <Header />
        <MapContainer fold={fold}>
          <WorldMapGrid setProgress = {(p) => setProgress(p)}/>
        </MapContainer>
      </ContentWrapper>
     
      <UtilSection fold={fold} onClickFold={onClickFold}/>

      {fold && <OpenButton onClick={onClickFold}>
        펼치기
      </OpenButton>}
    </Wrapper>
  )
}

export default React.memo(Main);