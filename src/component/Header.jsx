import React from 'react';
import styled from 'styled-components';
import HeaderCounting from './HeaderCounting';

const HeaderWrap = styled.header`
  width: 100%;
  height: 150px;
  padding: 15px;
  background-color: var(--backgroundColor);
  color: var(--textColor);
  box-shadow: 0 1px 2px var(--highlightColor);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.div`
  width: 100%;
  font-family: 'Squada One', cursive;
  font-size: 35px;
  color: var(--textColor); 
`

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogo>
        MY TRAVEL MAP
      </HeaderLogo>
      <HeaderCounting />
    </HeaderWrap>
  )
}

export default Header;