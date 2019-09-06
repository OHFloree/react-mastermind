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
        return <FieldRow key={i} attempts={this.state.attempts[i]} feedback={this.state.feedback[i]} />
      })}
    </FieldWrapper>
    );
  }
}
GameField.contextType = SocketContext

export default GameField

const FieldWrapper = styled.div`
  height: 100%;
  margin: 1em 1em 0% 1em;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`
