import React from 'react';
import ReactDOM from 'react-dom/client';
import ReduxApp1 from './Redux1/ReduxApp1';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './Redux1/reducer/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={configureStore()}>
    <ReduxApp1 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
