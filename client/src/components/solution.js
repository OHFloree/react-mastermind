import React, {Component} from 'react';
import SocketContext from '../context/socket-context.js'
import styled from 'styled-components';

class Solution extends Component {
  constructor() {
    super();
    this.state = {
      solution: ['','','','']
    }
  }

  componentDidMount() {
    this.context.on('gameover', (data) => {
      this.setState({solution: data.solution})
    })
  }

  render() {
    return(
      <SolutionWrapper>
        {this.state.solution.map((color, index) => {
            return <SolutionPin key={index} bgColor={color || 'black'}></SolutionPin>
        })}
      </SolutionWrapper>
    );
  }
}
Solution.contextType = SocketContext

export default Solution

const SolutionWrapper = styled.div`
  width: 14em;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em 0;
  border: solid white;
  border-width: 0px 5px 5px 5px;
  border-radius: 0 0 15px 15px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const SolutionPin = styled.div`
  width: 2em;
  height: 2em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
`
