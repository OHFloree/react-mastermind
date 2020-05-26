import React, { useEffect, useContext, Fragment } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { ColorContext } from '../context/colorContext'

import Selection from './Selection'
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
    <Wrapper>
      <GameField />
      <Selection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export default App;
