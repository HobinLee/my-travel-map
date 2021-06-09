import React from 'react';
import styled from 'styled-components';

export const Sea = ({ column, setCountry, point, length }) => {
  return <div
            column = {column}
            length = {length}
            point = {point}
            onMouseOver = {() => !point && setCountry('Sea')}
          >
          </div>
}

export const MemoizedSea =  React.memo(Sea);