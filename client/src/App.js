import React, {Fragment} from 'react';
import SocketContext from './context/socket-context.js'
import io from 'socket.io-client';
import styled from 'styled-components'
import Header from './components/header.js'
import GameField from './components/gamefield.js'
import PinPlacement from './components/placement'

const socket = io.connect('localhost:5000')

function App() {
  return (
    <SocketContext.Provider value = {socket}>
      <Wrapper>
        <Header />
        <GameField />
        <PinPlacement />
      </Wrapper>
    </SocketContext.Provider>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`
