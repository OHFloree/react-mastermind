import React, { useContext } from 'react'
import styled from 'styled-components'
import { SolutionContext } from '../context/solutionContext'

import { Pin } from './Pin'

export default function Solution() {
    const { solution } = useContext(SolutionContext)

    return (
        <StyledSolution>
            {solution.map((color, i) => (
                <Pin key={i} color={color} />
            ))}
        </StyledSolution>
    )
}

const StyledSolution = styled.div`
    width: 100%;
    height: 20vh;
    padding: 0 5em;
    background-color: #263238;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
