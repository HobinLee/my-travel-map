import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userListObjUpdate } from '../store/modules/map';

const UserCountryButtons = ({ listItem, closeModal = null }) => {
  const dispatch = useDispatch();
  const { userListObj } = useSelector(state => state.map);
  
  const onClickVisit = () => {
		if(userListObj[listItem]) {
			if(userListObj[listItem] === 2) {
				userListObj[listItem] = 1;
			} else {
				delete userListObj[listItem]
			}
		} else {
			userListObj[listItem] = 1;
		} 
		const newObj = { ...userListObj };
		dispatch(userListObjUpdate(newObj));
		
		window.localStorage.setItem("visitedObj", JSON.stringify({
		  ...newObj
    }));
    
    closeModal && closeModal();
	}

	const onClickBucket = () => {
		if(userListObj[listItem]) {
			if(userListObj[listItem] === 1) {
				userListObj[listItem] = 2;
			} else {
				delete userListObj[listItem]
			}	
		} else {
			userListObj[listItem] = 2;
		} 
		const newObj = { ...userListObj };
		dispatch(userListObjUpdate(newObj));
		
		window.localStorage.setItem("visitedObj", JSON.stringify({
		  ...newObj
    }));
    
    closeModal && closeModal();
  }
  

  return (
    <div>
      <button onClick={onClickVisit}>
        {userListObj[listItem] === 1 ? "온" : "오프"}
      </button>
      <button onClick={onClickBucket}>
        {userListObj[listItem] === 2 ? "온" : "오프"}
      </button>
    </div>
  )
}

export default UserCountryButtons