import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ColorContext } from '../context/colorContext'

import Selector from './Selector'

export default function Selection({ guess, setGuess }) {
    const { colors } = useContext(ColorContext)
    const [activeElement, setActiveElement] = useState(-1)

    const handleChange = (value, index) => {
        const newGuess = [...guess]
        newGuess[index] = value
        setGuess(newGuess)
        setActiveElement(-1)
    }

    const handleOpen = (i) => {
        if (activeElement === i) {
            setActiveElement(-1)
            return
        }
        setActiveElement(i)
    }

    return (
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
    )
}

const SelectorList = styled.div`
    width: 100%;
    padding: 2em 5em;
    display: flex;
    justify-content: space-between;
`

