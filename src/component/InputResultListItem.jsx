import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { userFocusOff } from '../store/modules/map';

const ListWrap = styled.li`
	padding: 3px;
	font-size: 13px;
	margin-bottom: 1px;
	color: ${props => props.darkMode && "#fff"};

  &:hover {
	  cursor: pointer;
		background-color: ${props => props.darkMode ? "#000" : "#eee"};;
  }
`

const InputResultListItem = ({listItem, listIndex, setInputData}) => {
	const dispatch = useDispatch();
	const { darkMode } = useSelector(state => state.mode);

	const onClickResult = () => {
    setInputData(listItem);
    dispatch(userFocusOff());
	}

	return (
		<ListWrap onClick={onClickResult} darkMode={darkMode}>
      {listItem}
			{console.log(darkMode)}
		</ListWrap>
	)
}

export default InputResultListItem;