import styled from 'styled-components';

const Cell = styled.div`
  background-color: #B8EECE;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`

const Grid = ({latitude, longitude}) => {
  return <Cell></Cell>;
}

export default Grid;