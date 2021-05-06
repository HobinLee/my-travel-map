import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchScreenMode } from './store/modules/mode';

import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loading from './page/Loading';
import Main from './page/Main';
import Toggle from './component/Toggle';

const Container = styled.div`
  width: auto;
  height: 100vh;
  background-color: ${props => props.darkMode ? `#333`:`white`};
`

const App = () => {
  const dispatch = useDispatch();
  const [ loadStart, startLoad ] = useState(false);
  const [ loadFinish, finishLoad ] = useState(false);
  const { darkMode } = useSelector(state => state.mode);

  useEffect(() =>{
    startLoad(true);
  }, [ darkMode ])

  return (
    <Container darkMode={darkMode}>
      {
        loadStart ?
        <>
        {
          !loadFinish && <Loading/>
        }
          <Switch>
          <Route exact path='/' render={()=>
            <Main finishLoad = {() => {
              console.log('finish load');
              finishLoad(true)}}/>
          } />
          
          <Route path='*' render={()=> 
            <Redirect to='/' />
          } />
          </Switch>
          {
          loadFinish &&
            <Toggle
              value = {darkMode}
              onChangeToggle = {() => {
                  window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));
                  dispatch(switchScreenMode());
                }}
            />
          }
          
        </>
        :
        <Loading/>
      }
    </Container> 
  );
}

export default App;
