import React, { createContext, useState, useContext } from 'react'
import { ColorContext } from './colorContext'
import { SolutionContext } from './solutionContext'
import axios from 'axios'

const FeedbackObjectContext = createContext()

function FeedbackObjectProvider({ children }) {
    const [feedbackObject, setfeedbackObject] = useState([])
    const { colors } = useContext(ColorContext)
    const { setSolution } = useContext(SolutionContext)

    const makeGuess = async (guess) => {
        try {
            await validateGuess(guess)
            let res = await axios.post('/api/guess', { guess })
            let { feedbackRow, gameState, solution } = res.data
            setfeedbackObject([...feedbackObject, feedbackRow])
            if (gameState !== 'PLAYING') {
                setSolution(solution)
            }
        }
        catch (e) {
            alert(e)
        }
    }

    const validateGuess = async (guess) => {
        if (!guess) {
            throw new Error('No values')
        }
        if (!guess.every(color => colors.includes(color))) {
            throw new Error('No valid values')
        }
        return
    }

    return (
        <FeedbackObjectContext.Provider value={{ feedbackObject, makeGuess }}>
            {children}
        </FeedbackObjectContext.Provider>
    )
}

export { FeedbackObjectProvider, FeedbackObjectContext }