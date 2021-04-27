import {useEffect, useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAxJqOZOoJkhv7XadPfaKcYbfAmHmYK2AI")
Geocode.setLanguage("en");
Geocode.setRegion("us");

const Load = styled.div`
  background-color: #eee;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
const Sea = styled.div`
  background-color: #ABDCFC;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`
const Land = styled.div`
  background-color: #3C6B40;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`

const Grid = ({latitude, longitude}) => {
  const [region, setRegion] = useState(null);

  const onClickView = (e) => {
    // console.log("hh");
    // console.log(e.clientX, e.clientY);
    // console.log(e.target.offsetHeight/2, e.target.offsetWidth/2);
    // console.log(e.target.clientHeight/2, e.target.clientWidth/2);
    // console.log(e.pageX, e.pageY)
  }
  // useEffect(() => {
  //   Geocode.fromLatLng(latitude ? latitude : '0.0', longitude ? longitude : '0.0').then(res => {
  //       const address = res.results[0].formatted_address.toString().toLowerCase();
  //       console.log(`${latitude}, ${longitude}` , address);
  //       if(address.includes("sea") || address.includes("ocean") || address.includes("bay") || address.includes("sea") || address.includes("passages") || address.includes("gulf"))
  //         setRegion('sea');
  //       else setRegion('address');
  //       /*
  //       let city, state, country;
  //       for (let i = 0; i < response.results[0].address_components.length; i++) {
  //         for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
  //           switch (response.results[0].address_components[i].types[j]) {
  //             case "locality":
  //               city = response.results[0].address_components[i].long_name;
  //               break;
  //             case "administrative_area_level_1":
  //               state = response.results[0].address_components[i].long_name;
  //               break;
  //             case "country":
  //               country = response.results[0].address_components[i].long_name;
  //               break;
  //           }
  //         }
  //       }*/
  //     },
  //     (error) => {
  //       if (error.status === 'ZERO_RESULTS') {
  //         setRegion('sea');
  //       } else {
  //         console.error(error);
  //         setRegion('sea');
  //       }
  //     }
  //   );
  // }, [])
  
  if (region === null) {
    return <Load onClick={onClickView}></Load>;
  } else {
    return (region === 'sea') ? <Sea/>: <Land/>;
  }
}

export default Grid;