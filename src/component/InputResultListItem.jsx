import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserCountryButtons from './UserCountryButtons';

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
	const { darkMode } = useSelector(state => state.mode);

	return (
		<ListWrap darkMode={darkMode}>
      	<span>{listItem}</span> 
			<UserCountryButtons listItem={ listItem }/>
		</ListWrap>
	)
}

export default InputResultListItem;