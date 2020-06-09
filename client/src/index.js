import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ColorProvider } from './context/colorContext'
import { FeedbackObjectProvider } from './context/feedbackObjectContext'
import { SolutionProvider } from './context/solutionContext'

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <SolutionProvider>
        <FeedbackObjectProvider>
          <App />
        </FeedbackObjectProvider>
      </SolutionProvider>
    </ColorProvider>
  </React.StrictMode >,
  document.getElementById('root')
);
