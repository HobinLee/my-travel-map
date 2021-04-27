import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import worldList from './map.json';
import InputResultListItem from './InputResultListItem';

const ListWrap = styled.ul`

`

const InputResultList = () => {
  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    const newObj = {}

    worldList.map(item1 => {
      return item1.map((item2, index)=> {
        const city = item2.split(", ")[item2.split(", ").length -1];
        return newObj[city] =  newObj[city] ? (newObj[city] || 0)+1 : 1
      })
    })

    console.log(newObj);
    setResultArray(Object.keys(newObj));
  }, [])

  return (
    <ListWrap>
      {resultArray.filter((_, index)=> {
        return index < 10;
      }).map((item, index)=> {
        return <InputResultListItem key={item + index} listItem={item} listIndex={index}/>
      })}
    </ListWrap>
  )
}

export default InputResultList;