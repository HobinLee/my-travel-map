import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserListItem from './UserListItem';
import { userListUpdate } from '../store/modules/map';


const UserList = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector(state => state.map);

  useEffect(()=> {
    const localData = JSON.parse(window.localStorage.getItem("visited"));
    console.log(localData);

    if(localData?.length > 0) {
      dispatch(userListUpdate(localData));
    }
  }, [])

  return (
    <ul>
      {userList.map((item, index)=> {
        return <UserListItem key={item + index} listItem={item} listIndex={index}/>
      })}
    </ul>
  )
}

export default UserList;