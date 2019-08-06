import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components'

class PinPlacement extends Component {
  constructor() {
    super();
    this.state = {
      placement : ['#000000','#000000','#000000','#000000'],
      colorPool: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/colors')
    .then(colors => this.setState({colorPool: colors.data}))
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handlePinSelection = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <PlacementContainer>
        {this.state.placement.map((color, index) => {
          return <SelectionPin onClick={this.handlePinSelection} key={index} bgColor={color}></SelectionPin>
        })}
        <Submit type="submit" onClick={this.handleSubmit}>OK</Submit>
        <ColorSelection>
          {this.state.colorPool.map((color, index) => {
            return <ColorSelector key={index} bgColor={color}></ColorSelector>
          })}
        </ColorSelection>
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
  background-color: ${props => props.bgColor};
`
