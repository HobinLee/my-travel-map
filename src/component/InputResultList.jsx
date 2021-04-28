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

    console.log(newObj);
    setResultArray(Object.keys(newObj).sort((a,b)=> b-a));
  }, [])

  return (
    <ListWrap>
    </ListWrap>
  )
}

export default InputResultList;