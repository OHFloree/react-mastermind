import React, {Fragment} from 'react';
import SocketContext from './context/socket-context.js'
import io from 'socket.io-client';
import styled from 'styled-components'
import Header from './components/header.js'
import GameField from './components/gamefield.js'
import PinPlacement from './components/placement'
import Solution from './components/solution.js'

const socket = io('127.0.0.1:5000')

function App() {
  return (
    <SocketContext.Provider value = {socket}>
      <Wrapper>
        <Header />
        <Solution />
        <GameField />
        <PinPlacement />
      </Wrapper>
    </SocketContext.Provider>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 60px auto 160px;
`
