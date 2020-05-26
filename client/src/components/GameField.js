import React, { useContext, Fragment } from 'react'
import { FeedbackObjectContext } from '../context/feedbackObjectContext'
import styled from 'styled-components'

function GameField() {
    const { feedbackObject } = useContext(FeedbackObjectContext)

    return (
        <Field>
            {feedbackObject.map((feedbackRow, i) => (
                <Row key={i}>
                    <Guess>
                        {feedbackRow.guess.map((guessField, j) => {
                            return <GuessPin key={j} color={guessField}></GuessPin>
                        })}
                    </Guess>
                    <Feedback>
                        <p>{feedbackRow.feedback[0]}</p>
                        <p>{feedbackRow.feedback[1]}</p>
                    </Feedback>
                </Row>
            ))}
        </Field>
    )
}

const Field = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-y: overlay;
`

const Row = styled.div`
    width: 50%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Guess = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const GuessPin = styled.div`
    height: 40px;
    width: 40px;
    background-color: ${props => props.color};
`

const Feedback = styled.div`
    width: 40px;
    height: 40px;
`

export default GameField

/*   -ms-overflow-style: none;

::-webkit-scrollbar {
    display: none;
}*/