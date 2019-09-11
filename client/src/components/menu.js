import React, {Component} from 'react';
import styled from 'styled-components';
import Context from '../context/context.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
  
  render() {
    return (
      <MenuContainer>
        <MenuHead>
          <MenuHeadLine>Menu</MenuHeadLine>
          <Icon icon={faTimes} size="lg" onClick={this.context.handlePause} />
        </MenuHead>
        <MenuBody>
          <MenuButton>Resume</MenuButton>
          <MenuButton>Restart</MenuButton>
          <MenuButton>Rules</MenuButton>
          <MenuButton>Scoreboard</MenuButton>
        </MenuBody>
      </MenuContainer>
    );
  }
}
Menu.contextType = Context

export default Menu

const MenuContainer = styled.div`
  width: 50%;
  background-color: #263238;
  box-shadow: 10px 10px 20px -10px rgba(0,0,0,0.3);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-itemn: stretch;
`
const MenuHead = styled.div`
  height: 4em;
  padding:0 5%;
  background-color: #000a12;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const MenuBody = styled.div`
  padding:1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuButton = styled.button`
  width: 60%;
  height: 2em;
  margin: 5% 0;
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  background-color: transparent;
  font-size:2em;
  transition: 120ms all ease-in-out;
  :hover {
    color: #1e88e5;
    border-color: #1e88e5;
  }
`

const IconContainer = styled.div`
  width: 25%;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 3em;
`

const MenuHeadLine = styled.h1`
  font-size: 1.5em;
`
