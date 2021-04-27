import React from 'react';
import styled from 'styled-components';

import InputCountry from '../component/InputCountry';
import MapImage from '../rsc/images/test.svg';
import WorldMap from '../component/WorldMap';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const MapContainer = styled.div`
  width: 80%;
  padding: 5%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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