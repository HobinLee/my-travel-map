import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import worldList from './map.json';
import InputResultListItem from './InputResultListItem';
import { filterDataUpdate } from '../store/modules/filter';

const ListWrap = styled.ul`
  display: block;
`

const InputResultList = ({ inputData="", setInputData }) => {
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
    delete newObj.Sea;
    setResultArray(Object.keys(newObj).sort((a,b)=> b-a));
    dispatch(filterDataUpdate(Object.keys(newObj).sort((a,b)=> b-a)));
  }, [])

  const input = inputData.replace('\\','\\\\').replace('[','\\[').replace(']','\\]').replace('?','\\?').replace('(','\\(').replace(')','\\)');
 
  return (
    <ListWrap>
      {resultArray.filter((item)=> {
        return item.match(new RegExp(`${input}`, 'i')) && isFocus && inputData.length
      }).filter((_,index)=> {
        return index < 10;
      }).map((item, index)=> {
        return <InputResultListItem key={item + index} listItem={item} listIndex={index} setInputData={setInputData}/>
      })}
    </ListWrap>
  )
}

export default InputResultList;