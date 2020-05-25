import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ColorProvider } from './context/colorContext'
import { FeedbackObjectProvider } from './context/feedbackObjectContext'

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <FeedbackObjectProvider>
        <App />
      </FeedbackObjectProvider>
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
