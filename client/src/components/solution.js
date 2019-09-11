import React, {Component} from 'react';
import Context from '../context/context.js'
import styled from 'styled-components';

class Solution extends Component {
  constructor() {
    super();
    this.state = {
      solution: ['','','','']
    }
  }

  componentDidMount() {
    this.context.socket.on('gameover', (data) => {
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
Solution.contextType = Context

export default Solution

const SolutionWrapper = styled.div`
  width: 21em;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const SolutionPin = styled.div`
  width: 3em;
  height: 3em;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.bgColor || '#000a12'};
`
