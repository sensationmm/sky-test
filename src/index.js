import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './containers/App.js';
import { checkBreakPoint } from './actions/ui';
import { getBill } from './actions/bill';

//Detect resize
window.addEventListener('resize', () => store.dispatch(checkBreakPoint()) );

store.dispatch(getBill('https://still-scrubland-9880.herokuapp.com/bill.json'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
