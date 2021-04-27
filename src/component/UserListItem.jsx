import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userListUpdate } from '../store/modules/map';

const UserListItem = ({ listItem, listIndex }) => {
  const dispatch = useDispatch();
  const { userList } = useSelector(state => state.map);

  const onClickDelete = () => {
    const newList = [...userList].filter((_,index)=> index !== listIndex);
  
    dispatch(userListUpdate(newList));
    window.localStorage.setItem("visited", JSON.stringify([...newList]));
  }

  return (
    <li>
      {listItem}
      <button onClick={onClickDelete}>x</button>
    </li>
  )
}

export default UserListItem;