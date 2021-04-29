import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userListObjUpdate } from '../store/modules/map';

const UserListItem = ({ listItem, listIndex }) => {
  const dispatch = useDispatch();
  const { userListObj } = useSelector(state => state.map);

  const onClickDelete = () => {
    // const newList = Object.keys(userListObj).filter((_,index)=> index !== listIndex);
    const newObj = { ...userListObj };
    delete newObj[listItem];
    
    console.log(newObj);
    dispatch(userListObjUpdate(newObj));

    window.localStorage.setItem("visitedObj", JSON.stringify({...newObj}));
  }

  return (
    <li>
      {listItem}
      <button onClick={onClickDelete}>x</button>
    </li>
  )
}

export default UserListItem;