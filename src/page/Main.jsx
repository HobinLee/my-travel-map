import React from 'react';
import styled from 'styled-components';

import InputCountry from '../component/InputCountry';
import MapImage from '../rsc/images/test.svg';
import WorldMap from '../component/WorldMap';
import DragScroll from '../component/DragScroll';

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

const Main = () => {
  return (
    <Wrapper>
      <MapContainer>
        <DragScroll>
          <WorldMap/>
        </DragScroll>
        {/* <img src={MapImage} alt=""/> */}
      </MapContainer>
      <InputCountry />
    </Wrapper>
  )
}

export default Main;