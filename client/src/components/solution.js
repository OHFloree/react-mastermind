import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

class Solution extends Component {
  constructor() {
    super();
    this.state = {
      solution: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3030/solution')
    .then(solution => this.setState({solution : solution.data}))
  }

  render() {
    console.log(this.state.solution)
    return(
      <SolutionWrapper>
        {this.state.solution.map((color, index) => {
          return <SolutionPin key={index} color={color}></SolutionPin>
        })}
      </SolutionWrapper>
    );
}
}

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
  line-height: 60px;
  background-color: ${props => props.color};
  font-size: 20px;
  text-align: center;
`
