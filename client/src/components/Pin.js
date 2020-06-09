import React from 'react'
import styled from 'styled-components'

const renderFbPins = (fb) => {
    let pins = []
    for (let red = 0; red < fb[0]; red++) {
        pins.push(<FeedbackPin color="red" />)
    }
    for (let white = 0; white < fb[1]; white++) {
        pins.push(<FeedbackPin color="white" />)
    }
    return pins
}

const Pin = styled.div`
    height: 50px;
    width: 50px;
    border: 2px solid white;
    border-radius: 25px;
    background-color: ${props => props.color};
`

const FeedbackPin = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${props => props.color};
`

export { Pin, renderFbPins }