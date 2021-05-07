import React, { useEffect } from 'react';
import styled from 'styled-components';

import UtilSection from '../component/UtilSection';
import WorldMap from '../component/WorldMap';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const MapContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 500px;
  overflow: auto;


  & > img {
    width: 100%;
  }
`

const Main = ({setProgress}) => {
  return (
    <Wrapper>
      <MapContainer>
        <WorldMap setProgress = {(p) => setProgress(p)}/>
      </MapContainer>
      <UtilSection />
    </Wrapper>
  )
}

export default React.memo(Main);