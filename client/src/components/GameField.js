import React, { useContext, Fragment } from 'react'
import { FeedbackObjectContext } from '../context/feedbackObjectContext'

function GameField() {
    const { feedbackObject } = useContext(FeedbackObjectContext)

    return (
        <Fragment>
            {feedbackObject.map(feedbackRow => (
                <div>{feedbackRow.guess.map(guessField => {
                    return <div style={{ backgroundColor: guessField }}>{guessField}</div>
                })}
                    <p>{feedbackRow.feedback[0]}</p>
                    <p>{feedbackRow.feedback[1]}</p>
                </div>
            ))}
        </Fragment>
    )
}

export default GameField

