import React, {Component, Fragment} from 'react';
import SocketContext from './context/socket-context.js'
import io from 'socket.io-client';
import styled from 'styled-components'
import Header from './components/header.js'
import GameField from './components/gamefield.js'
import PinPlacement from './components/placement'

const socket = io.connect('localhost:5000')

class App extends Component {
  constructor() {
    super();
    this.state = {
      pause: false
    }
  }

  getPause = (pause) => {
    this.setState({pause: pause})
  }

  render() {
    return (
      <SocketContext.Provider value = {socket}>
        <Wrapper>
          {this.state.pause ? <Overlay /> : null}
          <Header getPause={this.getPause} />
          <GameField />
          <PinPlacement />
        </Wrapper>
      </SocketContext.Provider>
    );
  }
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
`
