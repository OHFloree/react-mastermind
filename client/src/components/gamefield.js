import React, {Component} from 'react';
import SocketContext from '../context/socket-context.js'
import styled from 'styled-components';
import FieldRow from './fieldrow.js';

class GameField extends Component {
  constructor() {
    super();
    this.state = {
      attempts : [],
      feedback : []
    }
  }

  componentDidMount() {
    this.context.on('feedback', (feedback) => {
    this.setState({attempts: feedback.attempts, feedback: feedback.feedback})
    })
  }

  render() {
    return (
    <FieldWrapper>
      {this.state.attempts.map((attempts, i) => {
        return <FieldRow key={i} attempts={this.state.attempts} feedback={this.state.feedback} />
      })}
    </FieldWrapper>
    );
  }
}
GameField.contextType = SocketContext

export default GameField

const FieldWrapper = styled.div`
  grid-row: 3;
  margin: 2%;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-row-gap: 2%;
`
