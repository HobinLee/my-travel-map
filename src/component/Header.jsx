import React from 'react';
import styled from 'styled-components';
import HeaderCounting from './HeaderCounting';

const HeaderWrap = styled.header`
  width: 100%;
  height: 150px;
  padding: 15px;
  background-color: var(--backgroundColor);
  color: var(--textColor);
  box-shadow: 0 1px 5px var(--highlightColor);
  transition: 0.3s;
  display: flex;
  justify-contet: center;
  align-items: flex-end;
`


const Header = () => {
  return (
    <HeaderWrap>
      <HeaderCounting />
    </HeaderWrap>
  )
}

export default Header;