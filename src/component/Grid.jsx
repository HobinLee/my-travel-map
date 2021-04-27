import styled from 'styled-components';

const Load = styled.div`
  background-color: #eee;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
const Sea = styled.div`
  background-color: #ABDCFC;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
const Land = styled.div`
  background-color: #3C6B40;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

const Grid = ({address}) => {
  if (address === null) {
    return <Load></Load>;
  } else {
    return (address.includes('sea') || address.includes('ocean') || address.includes('bay') || address.includes('gulf') || address.includes('passages')) ? <Sea/>: <Land/>;
  }
}

export default Grid;