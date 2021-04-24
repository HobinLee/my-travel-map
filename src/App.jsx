import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from './page/Main';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path='/' render={()=>
          <Main />
        } />
        
        <Route path='*' render={()=> 
          <Redirect to='/' />
        } />
      </Switch>
    </Container> 
  );
}

export default App;
