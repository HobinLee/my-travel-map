import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { userFocusOff } from '../store/modules/map';

const ListWrap = styled.li`
	padding: 15px;
	font-size: 18px;
	margin-bottom: 1px;
	color: ${props => props.darkMode && "#fff"};
	background-color: ${props => props.darkMode && "#333"};
	display: flex;
	justify-content: space-between;
	align-items: center;

  &:hover {
	  cursor: pointer;
		background-color: ${props => props.darkMode ? "#000" : "#eee"};;
  }


	& > span {
		width: 50%;
	}
`


const InputResultListItem = ({ listItem, listIndex, setInputData, setIsClickResult, setInputCount }) => {
	const dispatch = useDispatch();
	const { darkMode } = useSelector(state => state.mode);
	const { userListObj } = useSelector(state => state.map);

	const onClickResult = () => {
		if(userListObj[listItem]) {
			setInputCount(userListObj[listItem]);
		}
		setInputData(listItem);
		dispatch(userFocusOff());
		setIsClickResult(true);
	}

	return (
		<ListWrap darkMode={darkMode}>
      <span>{listItem}</span> 

			<div>
				<button>visit</button>
				<button>bucket</button>
			</div>
		</ListWrap>
	)
}

export default InputResultListItem;