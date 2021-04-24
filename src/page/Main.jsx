import React from 'react';
import styled from 'styled-components';

import InputCountry from '../component/InputCountry';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const MapContainer = styled.div`
    width: 80%;
`

const Main = () => {
    return (
        <Wrapper>
            <MapContainer>여기는 지도자리</MapContainer>
            <InputCountry />
        </Wrapper>
    )
}

export default Main;