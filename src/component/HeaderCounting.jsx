import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RiFlag2Fill } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';

const CountingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100px;

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
  background-color: var(--visitColor);
  color: var(--fontColor);
  transition: 0.3s;
  z-index: 50;
  font-size: 35px;
  padding: 2%;
  overflow: auto;

  & > ul > li {
    margin-bottom: 15px;
  }
`

const BucketCountingListWrap = styled(VisitCountingListWrap)`
  width: ${props => props.bucketVisible ? "100%" : "0"};
  opacity: ${props => props.bucketVisible ? "1" : "0"};
  background-color: var(--bucketColor);
  transition: 0.5s;
`

const VisitIcon = styled(RiFlag2Fill)`
  font-size: 25px;
  color: orange;
  margin-bottom: 10px;
`

const BucketIcon = styled(FaStar)`
  font-size: 25px;
  color: skyblue;
  margin-bottom: 10px;
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
          <span><VisitIcon /></span>
          <span>visited</span>
          <span>{visitedCount}</span>
        </div>

        <div onClick={onClickBucket}>
          <span><BucketIcon /></span>
          <span>bucket</span>
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
