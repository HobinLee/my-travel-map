import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchScreenMode } from './store/modules/mode';

import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Loading } from './page/Loading';
import Main from './page/Main';
import Toggle from './component/Toggle';

const Container = styled.div`
  width: auto;
  height: 100vh;
  background-color: var(--backgroundColor);
  transition: 0.3s;
`

const App = () => {
  const dispatch = useDispatch();
  const [ loadStart, startLoad ] = useState(false);
  const [ progress, setProgress ] = useState(0);
  const { colorTheme } = useSelector(state => state.mode);
  
  useEffect(() => {
    console.log('theme: ', colorTheme);
    document.documentElement.setAttribute('color-theme', colorTheme);
    startLoad(true);
  }, [ colorTheme ])

  return (
    <Container>
      {
        loadStart ?
        <>
        {
          ( progress < 100 ) && <Loading progress = {progress}/>
        }
          <Switch>
          <Route exact path='/' render={()=>
            <Main setProgress = {(p) => setProgress(p)}/>
          } />
          
          <Route path='*' render={()=> 
            <Redirect to='/' />
          } />
          </Switch>
          {
          (progress >= 100) &&
            <Toggle
              value = {colorTheme === 'dark'}
              onChangeToggle = {e => {
                  e.target.value = !e.target.value;
                  document.documentElement.setAttribute('color-theme', colorTheme === 'dark' ? 'light' : 'dark');
                  window.localStorage.setItem("color-theme", colorTheme === 'dark' ? 'light' : 'dark');
                  dispatch(switchScreenMode());
                }}
            />
          }
        </>
        :
        <Loading progress = {progress}/>
      }
    </Container> 
  );
}

export default App;
