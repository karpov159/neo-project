import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/App/App';
import store from './core/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
