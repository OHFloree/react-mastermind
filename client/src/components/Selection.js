import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../context/colorContext'
import { FeedbackObjectContext } from '../context/feedbackObjectContext'

import Selector from './Selector'

export default function Selection() {
    const { makeGuess } = useContext(FeedbackObjectContext)
    const { colors } = useContext(ColorContext)
    const [guess, setGuess] = useState(['#000000', '#000000', '#000000', '#000000'])
    const [disabled, setDisabled] = useState(true)
    const [activeElement, setActiveElement] = useState(-1)

    const handleChange = (value, index) => {
        const newGuess = [...guess]
        newGuess[index] = value
        setGuess(newGuess)
        setActiveElement(-1)
        setDisabled(!newGuess.every(color => colors.includes(color)))
    }

    const handleSubmit = (e) => {
        makeGuess(guess)
        e.preventDefault()
    }

    const handleOpen = (i) => {
        if (activeElement === i) {
            setActiveElement(-1)
            return
        }
        setActiveElement(i)
    }

    return (
        <Form onSubmit={handleSubmit} >
            <SelectorList>
                {guess.map((guessField, i) => {
                    return <Selector
                        key={i}
                        colors={colors}
                        value={guessField}
                        isOpen={activeElement === i ? true : false}
                        index={i}
                        handleChange={handleChange}
                        handleOpen={() => handleOpen(i)}
                    />
                })}
            </SelectorList>
            <Submit type="submit" disabled={disabled}>SUBMIT</Submit>
        </Form >
    )
}

const Form = styled.form`
    width: 100%;
    background-color: #263238;
    display: flex;
    flex-direction: column;
`

const SelectorList = styled.div`
    width: 100%;
    padding: 2em 5em;
    display: flex;
    justify-content: space-between;
`

const Submit = styled.button`
    height: 5rem;
    border: none;
    background-color: #1e88e5;
    color: white;
    font-size: 1.2em;
    letter-spacing: 0.1rem;
`

