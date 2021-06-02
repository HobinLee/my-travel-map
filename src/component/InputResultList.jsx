import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import worldList from './map.json';
import InputResultListItem from './InputResultListItem';
import { filterDataUpdate } from '../store/modules/filter';

const ListWrap = styled.ul`
  width: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
  display: block;
  background-color: var(--backgroundColor);
  transition: 0.3s;
`

const InputResultList = ({ inputData }) => {
  const dispatch = useDispatch();
  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    const newObj = {}

    worldList.map(item1 => {
      return item1.map(item2 => {
        const city = item2;
        return newObj[city] =  newObj[city] ? (newObj[city] || 0) + 1 : 1
      })
    })

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
              />
      })}
    </ListWrap>
  )
}

export default InputResultList;