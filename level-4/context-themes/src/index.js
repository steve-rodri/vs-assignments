import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContextProvider } from './context/Theme';
import './index.css';

const Root = () => (
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
