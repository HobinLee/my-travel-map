import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RiFlag2Fill } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';

import { userListObjUpdate } from '../store/modules/map';


const ButtonWrap = styled.div`
	display: flex;

`

const Button = styled.button`
	background-color: unset;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	transition: 0.2s;

	&:hover {
		cursor: pointer;
	}

	&:active {
		transform: scale(1.3);
	}
`

const VisitedIcon = styled(RiFlag2Fill)`
	color: ${props => props.isactive === 1 ? "var(--visitColor)" : "#eee"};
`

const BucketIcon = styled(FaStar)`
	color: ${props => props.isactive === 2 ? "var(--bucketColor)" : "#eee"};
`


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
    <ButtonWrap>
      <Button onClick={onClickVisit}>
        {userListObj[listItem] === 1 ? <VisitedIcon isactive={userListObj[listItem]} /> : <VisitedIcon isactive={userListObj[listItem]}/>}
      </Button>
      <Button onClick={onClickBucket}>
        {userListObj[listItem] === 2 ? <BucketIcon isactive={userListObj[listItem]}/> : <BucketIcon isactive={userListObj[listItem]}/>}
      </Button>
    </ButtonWrap>
  )
}

export default UserCountryButtons