import React from 'react';
import styled from 'styled-components';
import HeaderCounting from './HeaderCounting';

const HeaderWrap = styled.header`
  width: 100%;
  height: 150px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
`


const Header = () => {
  return (
    <HeaderWrap>
      <HeaderCounting />
    </HeaderWrap>
  )
}

export default Header;