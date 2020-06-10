import React, { useEffect, useContext } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { ColorContext } from '../context/colorContext'

import Solution from './Solution'
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
  }, [setColors])

  return (
    <Wrapper>
      <Solution />
      <GameField />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #37474f;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export default App;
