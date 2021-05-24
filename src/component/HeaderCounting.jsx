import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { IoCloudyNight } from 'react-icons/io5';

const CountingWrap = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;


  & > div {
    display: flex;
    flex-direction: column;

    &:hover {
      cursor: pointer;
    }

    & > span {
      text-align: center;
    }
  }
`

const VisitCountingListWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.visitVisible ? "100%" : "0"};
  opacity: ${props => props.visitVisible ? "1" : "0"};
  transition: 0.5s;
  height: 100vh;
  background-color: yellow;
  z-index: 50;
`

const BucketCountingListWrap = styled(VisitCountingListWrap)`
  width: ${props => props.bucketVisible ? "100%" : "0"};
  opacity: ${props => props.bucketVisible ? "1" : "0"};
  transition: 0.5s;
`

const HeaderCounting = () => {
  const { userListObj } = useSelector(state => state.map);
  const [visitedCount, setVisitedCount] = useState(0);
  const [bucketCount, setBucketCount] = useState(0);
  const [visitVisible, setVisitVisible] = useState(false);
  const [bucketVisible, setBucketVisible] = useState(false);

  useEffect(()=> {
    setVisitedCount(Object.values(userListObj).filter(item => item === 1).length);
    setBucketCount(Object.values(userListObj).filter(item => item === 2).length);
  }, [userListObj])

  const onClickVisited = () => {
    setVisitVisible(true);
  }

  const onClickBucket = () => {
    setBucketVisible(true);
  }

  const onClickVisitedModal = () => {
    setVisitVisible(false);
  }

  const onClickBucketModal = () => {
    setBucketVisible(false);
  }

  return (
    <>
      <CountingWrap>
        <div onClick={onClickVisited}>
          <span>visited</span>
          <span>{visitedCount}</span>
        </div>

        <div>
          <span onClick={onClickBucket}>bucket</span>
          <span>{bucketCount}</span>
        </div>
      </CountingWrap>


      <VisitCountingListWrap visitVisible={visitVisible} onClick={onClickVisitedModal}>
        <ul>
          {Object.keys(userListObj).map(item => {
            if(userListObj[item] === 1) {
              return <li key={item}>{item}</li>
            }
          })}
        </ul>
      </VisitCountingListWrap>

      <BucketCountingListWrap bucketVisible={bucketVisible} onClick={onClickBucketModal}>
        <ul>
          {Object.keys(userListObj).map(item => {
            if(userListObj[item] === 2) {
              return <li key={item}>{item}</li>
            }
          })}
        </ul>
      </BucketCountingListWrap>
    </>
  )
}

export default HeaderCounting
