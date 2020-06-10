import React from 'react'
import styled from 'styled-components'

const renderFbPins = (fb) => {
    let pins = []
    for (let red = 0; red < fb[0]; red++) {
        pins.push(<FeedbackPin key={red} color="red" />)
    }
    for (let white = 0; white < fb[1]; white++) {
        pins.push(<FeedbackPin key={white + 4} color="white" />)
    }
    return pins
}

const Pin = styled.div`
    height: 3rem;
    width: 3rem;
    border: 2px solid white;
    border-radius: 1.5rem;
    background-color: ${props => props.color};
`

const FeedbackPin = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.625rem;
    background-color: ${props => props.color};
`

export { Pin, renderFbPins }