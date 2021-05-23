import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import worldList from './map.json';
import InputResultListItem from './InputResultListItem';
import { filterDataUpdate } from '../store/modules/filter';

const ListWrap = styled.ul`
  width: 100%;
  height: calc(100vh - 170px);
  overflow: auto;
  display: block;
  background-color: #fff;
`

const InputResultList = ({ inputData="", setInputData, setIsClickResult, setInputCount }) => {
  const dispatch = useDispatch();
  const { isFocus } = useSelector(state => state.map);
  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    const newObj = {}

    worldList.map(item1 => {
      return item1.map(item2 => {
        const city = item2;
        return newObj[city] =  newObj[city] ? (newObj[city] || 0) + 1 : 1
      })
    })

    console.log(Object.keys(newObj).sort((a,b)=> {
      if(a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    } ));

    setResultArray(Object.keys(newObj).sort((a,b)=> {
      if(a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    } ));
    dispatch(filterDataUpdate(Object.keys(newObj).sort((a,b)=> {
      if(a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    } )));
  }, [])

  return (
    <ListWrap>
      {resultArray.filter((item)=> {
        return item.toLowerCase().includes(inputData.toLowerCase()) && !item.toLowerCase().includes("sea")
      }).map((item, index)=> {
        return <InputResultListItem 
                  key={item + index}
                  listItem={item} 
                  listIndex={index} 
                  setInputData={setInputData}
                  setIsClickResult={setIsClickResult}
                  setInputCount={setInputCount}
              />
      })}
    </ListWrap>
  )
}

export default InputResultList;