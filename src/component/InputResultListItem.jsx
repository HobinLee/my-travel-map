import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { userFocusOff } from '../store/modules/map';

const ListWrap = styled.li`
	padding: 3px;
	font-size: 13px;
	margin-bottom: 1px;
	color: ${props => props.darkMode && "#fff"};
	background-color: ${props => props.darkMode && "#333"};

  &:hover {
	  cursor: pointer;
		background-color: ${props => props.darkMode ? "#000" : "#eee"};;
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
		<ListWrap onClick={onClickResult} darkMode={darkMode}>
      {listItem}
		</ListWrap>
	)
}

export default InputResultListItem;