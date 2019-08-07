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
  grid-row: 2;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: solid white;
  border-width: 0px 5px 5px 5px;
  border-radius: 0 0 15px 15px;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const SolutionPin = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 5px auto;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
`
