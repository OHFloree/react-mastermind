import React, {Component, Fragment} from 'react';
import Context from '../context/context.js'
import styled from 'styled-components'

class PinPlacement extends Component {
  constructor() {
    super();
    this.state = {
      placement : ['','','',''],
      colorPool: [],
      display: false,
      gameover: false,
      currentPin: 0,
      name: ''
    }
  }

  componentDidMount() {
    this.context.socket.on('colors', (color) => {
      this.setState({colorPool: color.colorPool})
    })

    this.context.socket.on('invalid', (text) => {
      alert(text)
    })

    this.context.socket.on('gameover', (data) => {
      this.setState({gameover: data.disabled})
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let placement = this.state.placement;
    this.context.socket.emit('placement', {placement})
    this.context.socket.on('placementCb', () => {
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
    window.location.reload();
  }

  changeName = (e) => {
    this.setState({name: e.target.value})
  }

  handlePost = (e) => {
    this.context.socket.emit('newScore', {name: this.state.name})
  }

  render() {
    return (
      <PlacementContainer onSubmit={this.handleSubmit} justify={this.state.gameover}>
        {this.state.gameover ? (
          <Fragment>
            <UpperContainer>
              <Input type="text" placeholder="INSERT YOUR NAME" value={this.state.name} onChange={this.changeName} />
              <Submit type="button" onClick={this.handlePost } radius="0px 8px 8px 0px">OK</Submit>
            </UpperContainer>
            <Submit type="button" onClick={this.handleRestart}>Restart Game</Submit>

          </Fragment>
        )
        : (
          <Fragment>
            <UpperContainer>
            {this.state.placement.map((color, i) => {
              return <SelectionPin id={i} onClick={this.handlePinSelection} key={i} disabled={this.state.gameover} bgColor={color}></SelectionPin>
            })}
            <Submit type="submit" disabled={this.state.gameover}>Ok</Submit>
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
PinPlacement.contextType = Context

export default PinPlacement;

const PlacementContainer = styled.form`
  min-height: 15em;
  padding: 0 2em;
  background-color: #263238;
  box-shadow: 0px 10px 20px 10px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify ? 'center' : 'flex-start'};
  align-items: ${props => props.justify ? 'center' : 'stretch'};
  @media (max-width: 400px) {
    min-height: 12em;
  }
`

const UpperContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LowerContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  display: ${props => props.display};
`


const SelectionPin = styled.button`
  width: 3em;
  height: 3em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.bgColor || '#000a12'};
  transition: 150ms all ease-in-out;
  :active {
    transform: translate(0, -0.5em);
  }
`

const Submit = styled.button`
  height: 3em;
  padding:0 2em;
  border: 2px solid white;
  border-radius: ${props => props.radius || '8px'};
  color: white;
  background-color: transparent;
  transition: 120ms all ease-in-out;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  :hover {
    color: #1e88e5;
    border-color: #1e88e5;
  }
`

const Input = styled.input`
  height: 3em;
  padding:0 2em;
  border: none;
  border-radius: 8px 0px 0px 8px;
  background-color: white;
  color: #263238;
  transition: 120ms all ease-in-out;
  letter-spacing: 0.1em;
  white-space: nowrap;
`

const ColorSelector = styled.button`
  min-width: 3em;
  height: 3em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.value};
  @media (max-width: 500px) {
    margin: 0 10px;
  }
`
