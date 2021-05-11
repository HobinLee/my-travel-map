import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import UserListItem from './UserListItem';
import { userListObjUpdate } from '../store/modules/map';

const UserListWrap = styled.ul`
  max-height: calc(100vh - 170px);
  overflow: auto;
`

const UserList = () => {
  const dispatch = useDispatch();
  const { userListObj } = useSelector(state => state.map);

  useEffect(()=> {
    const localData = JSON.parse(window.localStorage.getItem("visitedObj"));
    dispatch(userListObjUpdate(localData));
  }, [])

  return (
    <UserListWrap>
      {Object.keys(userListObj).map((item, index)=> {
        return <UserListItem key={item + index} listItem={item} listIndex={index}/>
      })}
    </UserListWrap>
  )
}

export default UserList;