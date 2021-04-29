import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import worldList from './map.json';
import InputResultListItem from './InputResultListItem';

const ListWrap = styled.ul`
  display: block;
`

const InputResultList = () => {
  const dispatch = useDispatch();
  const { userInput, isFocus } = useSelector(state => state.map);
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
  }, [])

  return (
    <ListWrap>
      {resultArray.filter((item, index)=> {
        return item.toLowerCase().includes(userInput.toLowerCase()) && !item.toLowerCase().includes("sea") && isFocus && userInput.length > 0
      }).filter((_,index)=> {
        return index < 10;
      }).map((item, index)=> {
        return <InputResultListItem key={item + index} listItem={item} listIndex={index}/>
      })}
    </ListWrap>
  )
}

export default InputResultList;