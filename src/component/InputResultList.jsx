import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import worldList from './map.json';
import InputResultListItem from './InputResultListItem';
import { filterDataUpdate } from '../store/modules/filter';

const ListWrap = styled.ul`
  width: 100%;
  max-height: 350px;
  overflow: auto;
  display: block;
  box-shadow: 0px 3px 3px #eee;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #fff;
`

const InputResultList = ({ inputData="", setInputData, setIsClickResult }) => {
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

    setResultArray(Object.keys(newObj).sort((a,b)=> b-a));
    dispatch(filterDataUpdate(Object.keys(newObj).sort((a,b)=> b-a)));
  }, [])

  return (
    <ListWrap>
      {resultArray.filter((item)=> {
        return item.toLowerCase().includes(inputData.toLowerCase()) && !item.toLowerCase().includes("sea") && isFocus && inputData.length > 0
      }).map((item, index)=> {
        return <InputResultListItem 
                  key={item + index}
                  listItem={item} 
                  listIndex={index} 
                  setInputData={setInputData}
                  setIsClickResult={setIsClickResult}
              />
      })}
    </ListWrap>
  )
}

export default InputResultList;