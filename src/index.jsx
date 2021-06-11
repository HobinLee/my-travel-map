import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
// import rootReducer from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import persistedReducer from './store';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(persistedReducer, compose(
  devTools
));

const persistor = persistStore(store);

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate> 
      </Provider>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
