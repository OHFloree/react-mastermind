import React, {Component,Fragment} from 'react';
import styled from 'styled-components';
import Context from '../context/context.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

class Scoreboard extends Component {
  constructor() {
    super();
    this.state = {
      scores: []
    }
  }

  componentDidMount() {
    this.context.socket.emit('score', null)

    this.context.socket.on('scoreCb', (scores) => {
      this.setState({scores})
      console.log(this.state.scores);
    })
  }

  render() {
    return (
      <ScoreContainer>
        <ScoreHead>
          <IconContainer><Icon icon={faArrowLeft} size="lg" /></IconContainer>
          <ScoreHeadLine>Scoreboard</ScoreHeadLine>
          <Spacing />
        </ScoreHead>
        <ScoreBody>
          {this.state.scores.map((scores, i) => {
            return <ScoreRow key={i} name={scores.user} score={scores.score}><p>{scores.user}</p><p>{scores.score}</p></ScoreRow>
          })}
        </ScoreBody>

      </ScoreContainer>
    );
  }
}
Scoreboard.contextType = Context

export default Scoreboard

const ScoreContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`
const ScoreHead = styled.div`
  min-height: 80px;
  margin-bottom: 40px;
  padding: 0 5%;
  background-color: #000a12;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ScoreHeadLine = styled.h1`
  width: 50%;
  font-size: 1.5em;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const IconContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 3em;
`

const Spacing = styled.div`
  width: 25%;
  height: 100%;
`

const ScoreBody = styled.div`
  height: calc(100vh - 160px);
  width: 80%;
  margin: 0 auto;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

const ScoreRow = styled.div`
  height: 80px;
  padding: 0 10%;
  background-color: #4f5b62;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  :nth-child(2n+1) {
    background-color: #000a12;
  }
  :last-child {
    border-radius:0 0 40px 40px;
  }
  :first-child {
    border-radius: 40px 40px 0 0;
  }
`
