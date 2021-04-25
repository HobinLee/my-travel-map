import React from 'react';
import styled from 'styled-components';

import InputCountry from '../component/InputCountry';
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
    justify-content: center;
    align-items: center;
`

const Main = () => {
    return (
        <Wrapper>
            <MapContainer>
                <WorldMap/>
            </MapContainer>
            <InputCountry />
        </Wrapper>
    )
}

export default Main;