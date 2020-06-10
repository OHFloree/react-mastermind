import React from 'react'
import styled from 'styled-components'

import { Pin, renderFbPins } from './Pin'

export default function Row({ guess, feedback }) {
    return (
        <StyledRow>
            <Guess>
                {guess.map((guessField, j) => {
                    return <Pin key={j} color={guessField}></Pin>
                })}
            </Guess>
            <Feedback>
                {renderFbPins(feedback)}
            </Feedback>
        </StyledRow>
    )
}

const StyledRow = styled.div`
    margin-bottom: 3vh;
    width: 100%;
    padding-left: 5em;
    display: flex;
    justify-content: space-between;
`

const Feedback = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
`

const Guess = styled.div`
    width: calc(100% - 5em);
    display: flex;
    justify-content: space-between;
`
