import React from 'react';
import { useSelector } from 'react-redux';

import UserListItem from './UserListItem';

const UserList = () => {
  const { userList } = useSelector(state => state.map);

  return (
    <ul>
      {userList.map((item, index)=> {
        return <UserListItem key={item + index} listItem={item} listIndex={index}/>
      })}
    </ul>
  )
}

export default UserList;