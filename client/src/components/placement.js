import React, {Component, Fragment} from 'react';
import SocketContext from '../context/socket-context.js'
import styled from 'styled-components'

class PinPlacement extends Component {
  constructor() {
    super();
    this.state = {
      placement : ['','','',''],
      colorPool: [],
      display: false,
      gameover: false ,
      currentPin: 0
    }
  }

  componentDidMount() {
    this.context.on('colors', (color) => {
      this.setState({colorPool: color.colorPool})
    })

    this.context.on('invalid', (text) => {
      alert(text)
    })

    this.context.on('gameover', (data) => {
      this.setState({gameover: data.disabled})
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let placement = this.state.placement;
    this.context.emit('placement', {placement})
    this.context.on('placementCb', () => {
      this.setState({placement: ['','','','']})
    })
  }

  handlePinSelection = (e) => {
    e.preventDefault();
    this.setState({currentPin: e.target.id, display: !this.state.display})
  }

  handleColorSelection = (e) => {
    e.preventDefault();
    let placement = this.state.placement;
    placement[this.state.currentPin] = e.target.value
    this.setState({placement, display: !this.state.display})
  }

  handleRestart = (e) => {
  }

  render() {
    return (
      <PlacementContainer onSubmit={this.handleSubmit}>
        {this.state.gameover ? (
          <p>Restart</p>
        )
        : (
          <Fragment>
            <UpperContainer>
            {this.state.placement.map((color, i) => {
              return <SelectionPin id={i} onClick={this.handlePinSelection} key={i} disabled={this.state.gameover} bgColor={color}></SelectionPin>
            })}
            <Submit type="submit" disabled={this.state.gameover}>OK</Submit>
            </UpperContainer>
            <LowerContainer display= {this.state.display ? 'flex' : 'none'}>
              {this.state.colorPool.map((color, index) => {
                return <ColorSelector onClick={this.handleColorSelection} key={index} value={color}></ColorSelector>
              })}
            </LowerContainer>
          </Fragment>
        )}
      </PlacementContainer>
    );
  }
}
PinPlacement.contextType = SocketContext

export default PinPlacement;

const PlacementContainer = styled.form`
  min-height: 10em;
  background-color: #263238;
  box-shadow: 0px 10px 20px 10px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`

const UpperContainer = styled.div`
  height: 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const LowerContainer = styled.div`
  height: 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  display: ${props => props.display};
`


const SelectionPin = styled.button`
  width: 2em;
  height: 2em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.bgColor || '#000a12'};
  transition: 150ms all ease-in-out;
  :active {
    transform: translate(0, -0.5em);
  }
`

const Submit = styled.button`
  width: 20%;
  height: 2em;
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  background-color: transparent;
  transition: 120ms all ease-in-out;
  :hover {
    color: #1e88e5;
    border-color: #1e88e5;
  }
`

const ColorSelector = styled.button`
  min-width: 2em;
  height: 2em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.value};
`
