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
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </Spacing>
        </HeaderWrapper>
      </Fragment>
    );
  }
}
Header.contextType = Context

export default Header;

const HeaderWrapper = styled.div`
  height: 150px;
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
  font-size: 3em;
`

const Spacing = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
