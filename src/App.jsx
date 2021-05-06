import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchScreenMode, setScreenMode } from './store/modules/mode';

import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from './page/Main';
import Toggle from './component/Toggle';

const Container = styled.div`
  width: auto;
  height: 100vh;
  background-color: ${props => props.darkMode ? `#333`:`white`};
`

const App = () => {

  useEffect(()=> {
    const localData = JSON.parse(window.localStorage.getItem("darkMode"));
    if (localData !== null) {
      dispatch(setScreenMode(localData));
    } else {
      window.localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, [])

  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.mode);

  return (
    <Container darkMode={darkMode}>
      <Switch>
        <Route exact path='/' render={()=>
          <Main />
        } />
        
        <Route path='*' render={()=> 
          <Redirect to='/' />
        } />
      </Switch>
      <Toggle
        value = {darkMode}
        onChangeToggle = {() => {
            window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));
            dispatch(switchScreenMode());
          }}>
      </Toggle>
    </Container> 
  );
}

export default App;
