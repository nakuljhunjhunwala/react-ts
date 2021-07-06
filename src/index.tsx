import 'typeface-prompt';

import App from './App';
import Provider from './store/Provider';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('yourgix'),
);
