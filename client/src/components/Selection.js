import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../context/colorContext'
import { FeedbackObjectContext } from '../context/feedbackObjectContext'

import Selector from './Selector'

export default function Selection() {
    const { makeGuess } = useContext(FeedbackObjectContext)
    const { colors } = useContext(ColorContext)
    const [guess, setGuess] = useState(['#000000', '#000000', '#000000', '#000000'])
    const [disabled, setDisabled] = useState(true)

    const handleChange = (value, index) => {
        const newGuess = [...guess]
        newGuess[index] = value
        setGuess(newGuess)
        setDisabled(!newGuess.every(color => colors.includes(color)))
    }

    const handleSubmit = (e) => {
        makeGuess(guess)
        e.preventDefault()
    }

    return (
        <Footer>
            <Form onSubmit={handleSubmit} >
                <SelectorList>
                    {guess.map((guessField, i) => (
                        <Selector key={i} index={i} value={guessField} handleChange={handleChange} colors={colors} />
                    ))}
                </SelectorList>
                <Submit type="submit" >OK</Submit>
            </Form >
        </Footer>
    )
}

const Footer = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const SelectorList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`

const Submit = styled.button`
    width: 40px;
    height: 40px;
    border: none;
`

