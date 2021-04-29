import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

import { userListObjUpdate } from '../store/modules/map';

const ListItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #eee;

  & > button {
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div > div:nth-child(1) {
    margin-bottom: 5px;
  }
`

const UserListItem = ({ listItem, listIndex }) => {
  const dispatch = useDispatch();
  const { userListObj } = useSelector(state => state.map);

  const onClickDelete = () => {
    // const newList = Object.keys(userListObj).filter((_,index)=> index !== listIndex);
    const newObj = { ...userListObj };
    delete newObj[listItem];
  
    dispatch(userListObjUpdate(newObj));
    window.localStorage.setItem("visitedObj", JSON.stringify({...newObj}));
  }

  return (
    <ListItemWrap>
      <div>
        <div>
          <span>여행한 나라 : </span>
          <span>{listItem}</span> 
        </div>
        <div>
          <span>방문 횟수 : </span>
          <span>{userListObj[listItem]}</span> 
        </div>
      </div>
      <button onClick={onClickDelete}>
        <AiOutlineClose />
      </button>
    </ListItemWrap>
  )
}

export default UserListItem;