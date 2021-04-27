import React from 'react';
import styled from 'styled-components';

import InputCountry from '../component/InputCountry';
import MapImage from '../rsc/images/test.svg';
import WorldMap from '../component/WorldMap';
import Grid from '../component//Grid';

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
  align-items: center;
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
        <WorldMap/>
        {/* <img src={MapImage} alt=""/> */}
      </MapContainer>
      <InputCountry />
    </Wrapper>
  )
}

export default Main;