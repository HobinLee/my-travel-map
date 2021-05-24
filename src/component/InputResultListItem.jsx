import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserCountryButtons from './UserCountryButtons';

const ListWrap = styled.li`
	padding: 15px;
	font-size: 18px;
	margin-bottom: 1px;
	color: var(--textColor);
	background-color: none;
	display: flex;
	justify-content: space-between;
	align-items: center;

  &:hover {
	  cursor: pointer;
		background-color: var(--highlightColor);
  }


	& > span {
		width: 50%;
	}
`


const InputResultListItem = ({ listItem, listIndex, setInputData, setIsClickResult, setInputCount }) => {
	return (
		<ListWrap>
      	<span>{listItem}</span> 
			<UserCountryButtons listItem={ listItem }/>
		</ListWrap>
	)
}

export default InputResultListItem;