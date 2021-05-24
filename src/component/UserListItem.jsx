import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';

import { userListObjUpdate, userEditOn, userEditData, userFocusOff } from '../store/modules/map';

const ListItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 5px;
  border: ${props => props.currentTarget ? "1px solid red" : "1px solid #eee"};
  color: var(--textColor);

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
  const { userListObj, isEdit } = useSelector(state => state.map);
  const [currentTarget, setCurrentTarget] = useState(false);

  useEffect(()=> {
    if(!isEdit) {
      setCurrentTarget(false);
    }
  }, [isEdit])

  const onClickDelete = () => {
    const newObj = { ...userListObj };
    delete newObj[listItem];
  
    dispatch(userListObjUpdate(newObj));
    window.localStorage.setItem("visitedObj", JSON.stringify({...newObj}));
  }

  const onClickEdit = () => {
    setCurrentTarget(true);
    dispatch(userFocusOff());
    dispatch(userEditOn());
    dispatch(userEditData(listItem, userListObj[listItem]));
  }

  return (
    <ListItemWrap currentTarget={currentTarget}>
      <div>
        <div>
          <span>여행한 나라 : </span>
          <span>{listItem}</span> 
        </div>
        <div>
          <span>방문 횟수 : </span>
          <span>{userListObj[listItem]}</span>
          {!isEdit && <span onClick={onClickEdit}> 수정</span>}
        </div>
      </div>
      <button onClick={onClickDelete}>
        <AiOutlineClose />
      </button>
    </ListItemWrap>
  )
}

export default UserListItem;