import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserListItem from './UserListItem';
import { userListObjUpdate } from '../store/modules/map';


const UserList = () => {
  const dispatch = useDispatch();
  const { userListObj } = useSelector(state => state.map);

  useEffect(()=> {
    const localData = JSON.parse(window.localStorage.getItem("visitedObj"));
    dispatch(userListObjUpdate(localData));
  }, [])

  return (
    <ul>
      {Object.keys(userListObj).map((item, index)=> {
        return <UserListItem key={item + index} listItem={item} listIndex={index}/>
      })}
    </ul>
  )
}

export default UserList;