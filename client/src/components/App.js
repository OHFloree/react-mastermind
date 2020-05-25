import React, { useEffect, useContext } from 'react';
import axios from 'axios'
import { ColorContext } from '../context/colorContext'

function App() {
  const { setColors } = useContext(ColorContext)

  useEffect(() => {
    const createGame = async () => {
      let res = await axios.get('/create-game')
      let { colors } = res.data
      setColors(colors)
    }
    createGame()
  }, [])

  return (
    <div>
    </div>
  );
}

export default App;
