import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components'

class PinPlacement extends Component {
  constructor() {
    super();
    this.state = {
      placement : ['#000000','#000000','#000000','#000000'],
      colorPool: [],
      currentPin: 0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/colors')
    .then(colors => this.setState({colorPool: colors.data}))
  }

  handleSubmit = (e) => {
    e.preventDefault();

    var placement = this.state.placement;
    axios.post(`http://localhost:5000/placement`, { placement })
  }

  handlePinSelection = (e) => {
    e.preventDefault();
    this.setState({currentPin: e.target.id})
  }

  handleColorSelection = (e) => {
    e.preventDefault();
    this.state.placement[this.state.currentPin] = e.target.value;
    console.log(this.state.placement);
  }

  render() {
    return (
      <PlacementContainer onSubmit={this.handleSubmit.bind(this)}>
        {this.state.placement.map((color, i) => {
          return <SelectionPin id={i} onClick={this.handlePinSelection} key={i} bgColor={color}></SelectionPin>
        })}
        <ColorSelection>
          {this.state.colorPool.map((color, index) => {
            return <ColorSelector onClick={this.handleColorSelection} key={index} value={color}></ColorSelector>
          })}
        </ColorSelection>
        <Submit type="submit">OK</Submit>
      </PlacementContainer>
    );
  }
}

export default PinPlacement;

const PlacementContainer = styled.form`
  grid-row: 4;
  margin: 0 2%;
  border-top: 5px solid white;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
  display: grid;
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
