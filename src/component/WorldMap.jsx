import Grid from './Grid';
import styled from 'styled-components';

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: center;
  align-element: center;
`
const MapDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 1px;
  justify-content: center;
  align-element: center;
`
const [latitude, longitude] = [90, 180];
const divider = 20;

const WorldMap = () => {
  const generateMapGrid = () => {
    const worldgrid = [];
    for (let j = latitude ; j > -latitude ; j -= divider) {
      const rows = [];
      for (let i = -longitude ; i < longitude ; i += divider) {
        rows.push([j, i]);
      }
      worldgrid.push(rows);
    }
    return worldgrid.map((r, i) => <MapDiv key = {i}>
      {
        r.map(geo => <Grid key={geo[0] + ', ' + geo[1]} latitude={geo[0]} longitude={geo[1]}></Grid>)
      }
    </MapDiv>);
  }

  return <MapWrapper> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;