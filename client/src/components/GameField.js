import React, { useContext, useRef, useEffect } from 'react'
import { FeedbackObjectContext } from '../context/feedbackObjectContext'
import styled from 'styled-components'

import Row from './Row'

function GameField() {
    const { feedbackObject } = useContext(FeedbackObjectContext)
    const gameField = useRef(null)

    useEffect(() => {
        gameField.current.scrollTop = gameField.current.scrollHeight
    }, [feedbackObject])

    return (
        <Field ref={gameField}>
            {feedbackObject.map((feedbackRow, i) => (
                <Row
                    key={i}
                    guess={feedbackRow.guess}
                    feedback={feedbackRow.feedback}
                />
            ))}
        </Field>
    )
}

const Field = styled.div`
    height: 100%;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    overflow-y: overlay;
`

export default GameField