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
            return <SolutionPin key={index} bgColor={color}></SolutionPin>
        })}
      </SolutionWrapper>
    );
  }
}
Solution.contextType = SocketContext

export default Solution

const SolutionWrapper = styled.div`
  width: 14em;
  height: 100%;
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
  background-color: ${props => props.bgColor || '#000a12'};
`
