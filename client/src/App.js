import React, {Fragment} from 'react';
import styled from 'styled-components'
import Header from './components/header.js'
import GameField from './components/gamefield.js'

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

const Solution = styled.div`
  grid-row: 2;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: solid white;
  border-width: 0px 5px 5px 5px;
  border-radius: 0 0 15px 15px;
  background-color: black;
`

const PinPlacement = styled.div`
  grid-row: 4;
  border-top: 5px solid white;
`
