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
const [latitude, longitude] = [180, 90];
const divider = 0.5;

const WorldMap = () => {
  const generateMapGrid = () => {
    const worldgrid = [];
    for (let j = -longitude * divider ; j < longitude * divider ; j ++) {
      const rows = [];
      for (let i = -latitude * divider ; i < latitude * divider ; i ++) {
        rows.push([i, j]);
      }
      worldgrid.push(rows);
    }
    console.log(worldgrid.length, worldgrid[0].length)
    return worldgrid.map((r, i) => <MapDiv key = {i}>
      {
        r.map(geo => <Grid key={geo[0] + ', ' + geo[1]} latitude={geo[0]} longitude={geo[1]}></Grid>)
      }
    </MapDiv>);
  }

  return <MapWrapper> {generateMapGrid()} </MapWrapper>;
}

export default WorldMap;