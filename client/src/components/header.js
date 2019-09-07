import React, {Component,Fragment} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons'

import Solution from './solution.js';
import Logo from '../images/logo.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      anim: false,
      pause: false
    }
  }

  handleMouseOver = (e) => {
    this.setState({anim: true})
  }

  handleMouseOut = (e) => {
    this.setState({anim: false})
  }

  handlePause = (e) => {
    alert('pause')
  }

  render() {
    return (
      <HeaderWrapper>
        <IconContainer>
          <Icon icon={faCog} size="lg" onClick={this.handlePause} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} spin={this.state.anim}/>
        </IconContainer>
        <Solution />
        <LogoContainer>
          <img src={Logo} height="40px"></img>
        </LogoContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;

const HeaderWrapper = styled.div`
  height: 100px;
  padding: 0 5%;
  background-color: #263238;
  border-bottom: 5px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const IconContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start
  align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 2em;
  :active {
    color: red;
  }
`
