import 'typeface-roboto';
import 'typeface-lato';

import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import React from 'react';
import Router from './routes';
import locales from './locales';

const App = (): JSX.Element => (
  <IntlProvider locale="de" messages={locales.de} defaultLocale="de">
    <BrowserRouter basename="/">
      <Router />
    </BrowserRouter>
  </IntlProvider>
);

export default App;
