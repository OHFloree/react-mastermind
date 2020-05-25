import React, { useContext, useState } from 'react'
import { ColorContext } from '../context/colorContext'
import { FeedbackObjectContext } from '../context/feedbackObjectContext'

import Selector from './Selector'

export default function Footer() {
    const [guess, setGuess] = useState(['#000000', '#000000', '#000000', '#000000'])
    const { colors } = useContext(ColorContext)
    const { makeGuess } = useContext(FeedbackObjectContext)

    const handleChange = (e, index) => {
        const { value } = e.target
        const newGuess = [...guess]
        newGuess[index] = value
        setGuess(newGuess)
    }

    const handleSubmit = (e) => {
        makeGuess(guess)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} >
            {guess.map((guessField, i) => (
                <Selector key={i} index={i} value={guessField} handleChange={handleChange} colors={colors} />
            ))}
            <button type="submit">OK</button>
        </form >
    )
}

