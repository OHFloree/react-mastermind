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
        {this.state.placement.map((color, i) => {
          return <SelectionPin id={i} onClick={this.handlePinSelection} key={i} bgColor={color}></SelectionPin>
        })}
        <ColorSelection display= {this.state.display ? 'grid' : 'none'}>
          {this.state.colorPool.map((color, index) => {
            return <ColorSelector onClick={this.handleColorSelection} key={index} value={color}></ColorSelector>
          })}
        </ColorSelection>
        <Submit type="submit" disabled={this.state.gameover}>OK</Submit>
      </PlacementContainer>
    );
  }
}
PinPlacement.contextType = SocketContext

export default PinPlacement;

const PlacementContainer = styled.form`
  grid-row: 4;
  padding: 0 2%;
  border-top: 5px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  display: grid;
  grid-template-columns: repeat(4, 1fr) 0.5fr 1fr;
  grid-template-rows: 1fr 1fr;
`
const SelectionPin = styled.button`
  grid-row: 1;
  width: 40px;
  height: 40px;
  margin: auto;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.bgColor || 'black'};
`

const Submit = styled.button`
  grid-row: 1;
  grid-column: 6;
  height: 40px;
  margin: auto 0;
  border: none;
  border-radius: 8px;
  background-color: white
`

const ColorSelection = styled.div`
  grid-row: 2;
  grid-column: 1 / 7;
  overflow-x: scroll;
  overflow-y: hidden;
  display: ${props => props.display};
  grid-template-columns: repeat(8, 1fr);
`
const ColorSelector = styled.button`
  width: 40px;
  height: 40px;
  margin: auto 10px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.value};
`
