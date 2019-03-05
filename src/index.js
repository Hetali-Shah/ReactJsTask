import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import './assets/style/index.scss';
import Routes from './Routes';
import store from './redux/Store';
render(
    <Provider store={store}>
        <Routes/>
  </Provider>, document.getElementById('app'));
