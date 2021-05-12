import React, { useState } from 'react';
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
  color: ${props => props.darkMode && "#fff"};

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
  const { darkMode } = useSelector(state => state.mode);

  const [isEdit, setIsEdit] = useState(false);
  const [count, setCount] = useState("");

  const onClickDelete = () => {
    // const newList = Object.keys(userListObj).filter((_,index)=> index !== listIndex);
    const newObj = { ...userListObj };
    delete newObj[listItem];
  
    dispatch(userListObjUpdate(newObj));
    window.localStorage.setItem("visitedObj", JSON.stringify({...newObj}));
  }

  const onClickEdit = () => {
    setCount(userListObj[listItem]);
    setIsEdit(true);
  }

  const onClickEditComplete = () => {
    const newObj =  { ...userListObj };
    newObj[listItem] = parseInt(count);
    if(parseInt(count) === 0) {
      delete newObj[listItem];
    }
    dispatch(userListObjUpdate(newObj));
    window.localStorage.setItem("visitedObj", JSON.stringify({...newObj}));
    setIsEdit(false);
  }

  const onChangeCount = (e) => {
    setCount(e.target.value);
  }

  return (
    <ListItemWrap darkMode={darkMode}>
      <div>
        <div>
          <span>여행한 나라 : </span>
          <span>{listItem}</span> 
        </div>
        <div>
          <span>방문 횟수 : </span>
          {isEdit && <input type="number" value={count} onChange={onChangeCount} min="1"/>}
          {!isEdit && <span>{userListObj[listItem]}</span> }
          {!isEdit &&  <span onClick={onClickEdit}> 수정</span>}
          {isEdit && <span onClick={onClickEditComplete}> 완료</span>}
        </div>
      </div>
      <button onClick={onClickDelete}>
        <AiOutlineClose />
      </button>
    </ListItemWrap>
  )
}

export default UserListItem;