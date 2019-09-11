import React, {Component, Fragment} from 'react';
import io from 'socket.io-client';
import styled from 'styled-components'
import Context from './context/context.js'

import Header from './components/header.js'
import GameField from './components/gamefield.js'
import PinPlacement from './components/placement.js'
import Menu from './components/menu.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pause: false,
      handlePause: this.handlePause,
      socket: io.connect('localhost:5000')
    }
  }

  handlePause = () => {
    console.log(this.state.pause);
    this.setState({pause: !this.state.pause})
  }

  render() {
    return (
      <Context.Provider value = {this.state}>
        <Wrapper>
          {this.state.pause ? <Overlay><Menu /></Overlay> : null}
          <Header />
          <GameField />
          <PinPlacement />
        </Wrapper>
      </Context.Provider>
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
  display: flex;
  justify-content: center;
  align-items: center;
`
