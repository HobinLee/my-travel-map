import React from 'react';
import styled from 'styled-components';

const ListWrap = styled.li`
  border: 1px solid #000;
`

const InputResultListItem = ({listItem, listIndex}) => {
	return (
		<ListWrap>
      {listItem}
		</ListWrap>
	)
}

export default InputResultListItem;