import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAxJqOZOoJkhv7XadPfaKcYbfAmHmYK2AI")
Geocode.setLanguage("en");
Geocode.setRegion("us");

const Load = styled.div`
  background-color: #eee;
  width: 6px;
  height: 6px;
  border-radius: 50%;
`
const Sea = styled.div`
  background-color: #ABDCFC;
  width: 6px;
  height: 6px;
  border-radius: 50%;
`
const Land = styled.div`
  background-color: #3C6B40;
  width: 6px;
  height: 6px;
  border-radius: 50%;
`

const Grid = ({address}) => {
  const [region, setRegion] = useState(null);

  if (address === null) {
    return <Load></Load>;
  } else {
    return (address.includes('sea') || address.includes('ocean') || address.includes('bay') || address.includes('gulf') || address.includes('passages')) ? <Sea/>: <Land/>;
  }
}

export default Grid;