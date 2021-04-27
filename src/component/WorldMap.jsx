import worldgrid from './map.json';
import styled from 'styled-components';
import Grid from './Grid';

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-element: center;
`
const MapDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 3px;
  justify-content: flex-start;
  align-element: center;
`

const WorldMap = () => {
  
  const generateMapGrid = () => {
    
    return worldgrid.map((r, i) => <MapDiv key = {i}>
     {
       r.map((geo, j) => <Grid key={i + ','+ j} address={geo.toLowerCase()}></Grid>)
     }
    </MapDiv>);
  }

  return <MapWrapper> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;