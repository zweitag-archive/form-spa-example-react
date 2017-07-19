import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './global/base.scss';

import App from './app/App.container';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
);

registerServiceWorker();
