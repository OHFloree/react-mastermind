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
        <Form onSubmit={handleSubmit} >
            <Filler />
            <SelectorList>
                {guess.map((guessField, i) => (
                    <Selector key={i} index={i} value={guessField} handleChange={handleChange} colors={colors} />
                ))}
            </SelectorList>
            <Filler>
                <Submit type="submit" >OK</Submit>
            </Filler>
        </Form >
    )
}

const Form = styled.form`
    height: 30vh;
    width: 100%;
    background-color: #263238;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const SelectorList = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-evenly;
`

const Filler = styled.div`
    flex: 1;
    display: flex;
`

const Submit = styled.button`
    width: 100px;
    height: 50px;
    border: none;
`

