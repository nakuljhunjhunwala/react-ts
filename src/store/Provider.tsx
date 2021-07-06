import * as React from 'react';

import { persistor, store } from './store';

import { IProps } from './interfaces';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReactReduxProvider } from 'react-redux';

const Provider = ({ children }: IProps): JSX.Element => (
  <ReactReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </ReactReduxProvider>
);

export default Provider;
