import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ColorProvider } from './context/colorContext'

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
