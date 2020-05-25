import React, { useEffect } from 'react';
import axios from 'axios'

function App() {

  useEffect(() => {
    const createGame = async () => {
      await axios.get('/create-game')
    }
    createGame()
  }, [])

  return (
    <div>
    </div>
  );
}

export default App;
