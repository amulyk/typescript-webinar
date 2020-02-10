// Core
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from './init/store';

// Components
import { Header } from './Header';
import { Starships } from './bus/starships';

export const App = (): ReactElement => (
  <Provider store={store}>
    <h1>App</h1>
    <Header title="Hi" />
    <Starships />
  </Provider>
);
