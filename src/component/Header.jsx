import React from 'react';
import styled from 'styled-components';
import HeaderCounting from './HeaderCounting';

const HeaderWrap = styled.header`
  width: 100%;
  height: 150px;
  background-color: var(--backgroundColor);
  color: var(--textColor);
  border-bottom: 1px solid var(--highlightColor);
  border-right: 1px solid var(--highlightColor);
  transition: 0.3s;
`


const Header = () => {
  return (
    <HeaderWrap>
      <HeaderCounting />
    </HeaderWrap>
  )
}

export default Header;