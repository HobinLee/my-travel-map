import React from 'react';
import styled from 'styled-components';

import InputCountry from './InputCountry';
import UserList from './UserList';

const UtilSectionWrap = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const UtilSection = () => {
  return (
    <UtilSectionWrap>
      <InputCountry />
      <UserList />
    </UtilSectionWrap>
  )
}

export default UtilSection;