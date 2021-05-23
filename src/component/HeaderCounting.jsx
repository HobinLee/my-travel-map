import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const CountingWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;

    & > span {
      text-align: center;
    }
  }
`


const HeaderCounting = () => {
  const { userListObj } = useSelector(state => state.map);
  const [visitedCount, setVisitedCount] = useState(0);
  const [bucketCount, setBucketCount] = useState(0);

  useEffect(()=> {
    setVisitedCount(Object.keys(userListObj).length);
  }, [userListObj])

  return (
    <CountingWrap>
      <div>
        <span>visited</span>
        <span>{visitedCount}</span>
      </div>

      <div>
        <span>bucket</span>
        <span>0</span>
      </div>
    </CountingWrap>
  )
}

export default HeaderCounting
