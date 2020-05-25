import React, { useEffect, useContext, Fragment } from 'react';
import axios from 'axios'
import { ColorContext } from '../context/colorContext'

import Footer from './Footer'
import GameField from './GameField'

function App() {
  const { setColors } = useContext(ColorContext)

  useEffect(() => {
    const createGame = async () => {
      let res = await axios.get('/api/create-game')
      let { colors } = res.data
      setColors(colors)
    }
    createGame()
  }, [])

  return (
    <Fragment>
      <GameField />
      <Footer />
    </Fragment>
  );
}

export default App;
