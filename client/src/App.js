import React, {Fragment} from 'react';
import styled from 'styled-components'
import Header from './components/header.js'
import GameField from './components/gamefield.js'
import PinPlacement from './components/placement'
import Solution from './components/solution.js'

function App() {
  return (
    <Wrapper>
      <Header />
      <Solution />
      <GameField />
      <PinPlacement />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 60px auto 160px;
`
