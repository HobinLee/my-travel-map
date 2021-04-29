import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { userFocusOff } from '../store/modules/map';

const ListWrap = styled.li`
  border: 1px solid #000;

  &:hover {
	  cursor: pointer;
  }
`

const InputResultListItem = ({listItem, listIndex, setInputData}) => {
	const dispatch = useDispatch();

	const onClickResult = () => {
    setInputData(listItem);
    dispatch(userFocusOff());
	}

	return (
		<ListWrap onClick={onClickResult} >
      {listItem}
		</ListWrap>
	)
}

export default InputResultListItem;