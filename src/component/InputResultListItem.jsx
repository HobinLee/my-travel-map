import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { userInputUpdate, userFocusOff } from '../store/modules/map';

const ListWrap = styled.li`
  border: 1px solid #000;

  &:hover {
	  cursor: pointer;
  }
`

const InputResultListItem = ({listItem, listIndex}) => {
	const dispatch = useDispatch();

	const onClickResult = () => {
    dispatch(userInputUpdate(listItem));
    dispatch(userFocusOff());
	}

	return (
		<ListWrap onClick={onClickResult} >
      {listItem}
		</ListWrap>
	)
}

export default InputResultListItem;