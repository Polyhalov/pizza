// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './components/App.tsx';

const rootElem = document.getElementById('root');
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='pizza'>
      <App></App>
    </BrowserRouter>
    </Provider>
    
  // </React.StrictMode>
);
}

