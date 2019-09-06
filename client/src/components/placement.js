import React, {Component} from 'react';
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

    var placement = this.state.placement;
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

  render() {
    return (
      <PlacementContainer onSubmit={this.handleSubmit}>
        <UpperContainer>
        {this.state.placement.map((color, i) => {
          return <SelectionPin id={i} onClick={this.handlePinSelection} key={i} bgColor={color}></SelectionPin>
        })}
        <Submit type="submit" disabled={this.state.gameover}>OK</Submit>
        </UpperContainer>
        <LowerContainer display= {this.state.display ? 'flex' : 'none'}>
          {this.state.colorPool.map((color, index) => {
            return <ColorSelector onClick={this.handleColorSelection} key={index} value={color}></ColorSelector>
          })}
        </LowerContainer>
      </PlacementContainer>
    );
  }
}
PinPlacement.contextType = SocketContext

export default PinPlacement;

const PlacementContainer = styled.form`
  min-height: 10em;
  border-top: 5px solid white;
  background-color: rgba(255, 255, 255, 0.3);
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
  justify-content: flex-start;
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
  background-color: ${props => props.bgColor || 'black'};
  transition: 150ms all ease-in-out;
  :active {
    transform: translate(0, -0.5em);
  }
`

const Submit = styled.button`
  width: 20%;
  height: 2em;
  border: none;
  border-radius: 8px;
  background-color: white
`

const ColorSelector = styled.button`
  min-width: 2em;
  height: 2em;
  margin: 0 7%;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.value};
`
