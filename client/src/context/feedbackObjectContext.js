import React, { createContext, useState, useContext } from 'react'
import { ColorContext } from './colorContext'
import axios from 'axios'

const FeedbackObjectContext = createContext()

function FeedbackObjectProvider({ children }) {
    const [feedbackObject, setfeedbackObject] = useState([])
    const { colors } = useContext(ColorContext)

    const makeGuess = async (guess) => {
        try {
            await validateGuess(guess)
            let res = await axios.post('/api/guess', { guess })
            let { feedbackRow, gameState, solution } = res.data
            setfeedbackObject([...feedbackObject, feedbackRow])
        }
        catch (e) {
            alert(e)
        }
    }

    const validateGuess = async (guess) => {
        if (!guess) {
            throw `No values`
        }
        if (!guess.every(color => colors.includes(color))) {
            throw `No valid values`
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