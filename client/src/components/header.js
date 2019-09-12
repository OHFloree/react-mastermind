import React, {Component,Fragment} from 'react';
import {BrowserRouter as Route,Link} from 'react-router-dom'
import styled from 'styled-components';
import Context from '../context/context.js';
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

  render() {
    return (
      <Fragment>
        <HeaderWrapper>
          <IconContainer>
            <Icon icon={faCog} size="lg" onClick={this.context.handlePause} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} spin={this.state.anim}/>
          </IconContainer>
          <Solution />
          <Spacing>
            <A to="/impressum">Impressum</A>
            <A to="/datenschutz">Datenschutz</A>
          </Spacing>
        </HeaderWrapper>
      </Fragment>
    );
  }
}
Header.contextType = Context

export default Header;

const HeaderWrapper = styled.div`
  min-height: 80px;
  padding: 0 5%;
  background-color: #263238;
  border-bottom: 5px solid white;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  font-size: 2.5em;
`

const Spacing = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const A = styled(Link)`
  z-index: 3;
  @media (max-width: 525px) {
    position: absolute;
    top: 85px;
    :nth-child(1) {
      left: 20%;
    }
    :nth-child(2) {
      right: 20%;
    }
  }
`
