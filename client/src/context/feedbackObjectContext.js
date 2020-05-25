import React, { createContext, useState } from 'react'
import axios from 'axios'

const FeedbackObjectContext = createContext()

function FeedbackObjectProvider({ children }) {
    const [feedbackObject, setfeedbackObject] = useState([])

    const makeGuess = async (guess) => {
        let res = await axios.post('/api/guess', { guess })
        let { feedbackRow, gameState, solution } = res.data
        setfeedbackObject([...feedbackObject, feedbackRow])
    }

    return (
        <FeedbackObjectContext.Provider value={{ feedbackObject, makeGuess }}>
            {children}
        </FeedbackObjectContext.Provider>
    )
}

export { FeedbackObjectProvider, FeedbackObjectContext }