import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/store/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>    
        <App />
    </React.StrictMode>
  </Provider>
);