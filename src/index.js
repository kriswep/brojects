import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/css/material.indigo-pink.min.css';
import 'react-mdl/extra/material.js';

import configureStore from './store';
import App from './containers/App';
import './index.css';

let store = configureStore();

const Index = <Provider store={store}>
    <App />
  </Provider>

export const IndexComponent = () => (
  Index 
);

export default ReactDOM.render(
  Index,
  document.getElementById('root') || document.createElement('div')
);
