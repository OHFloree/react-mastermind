import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ColorProvider } from './context/colorContext'
import { FeedbackObjectProvider } from './context/feedbackObjectContext'
import { SolutionProvider } from './context/solutionContext'
import { GameStateProvider } from './context/gameStateContext'

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <SolutionProvider>
        <GameStateProvider>
          <FeedbackObjectProvider>
            <App />
          </FeedbackObjectProvider>
        </GameStateProvider>
      </SolutionProvider>
    </ColorProvider>
  </React.StrictMode >,
  document.getElementById('root')
);
