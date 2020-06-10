import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { GameStateContext } from '../context/gameStateContext'
import { ColorContext } from '../context/colorContext'
import { FeedbackObjectContext } from '../context/feedbackObjectContext'

import Selection from './Selection'
import Button from './Button'
import Spinner from './Spinner'

export default function Footer() {
    const { gameState } = useContext(GameStateContext)
    const { makeGuess } = useContext(FeedbackObjectContext)
    const [guess, setGuess] = useState(['#000000', '#000000', '#000000', '#000000'])
    const { colors } = useContext(ColorContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        makeGuess(guess)
    }

    const handleRestart = (e) => {
        e.preventDefault()
        window.location.reload()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <UpperFooter>
                {gameState === 'PLAYING' ?
                    colors.length > 0 ?
                        <Selection guess={guess} setGuess={setGuess} /> :
                        <Spinner /> :
                    <GameState>YOU {gameState}</GameState>
                }
            </UpperFooter>
            <LowerFooter>
                {gameState === 'PLAYING' ?
                    colors.length > 0 ?
                        <Button type="submit" >SUBMIT</Button> :
                        null :
                    <Button type="button" onClick={handleRestart}>Restart</Button>
                }
            </LowerFooter>
        </Form>
    )
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const LowerFooter = styled.div`

`

const UpperFooter = styled.div`
    background-color: #263238;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GameState = styled.p`
    font-size: 1.5rem;
    padding: 2rem 0;
    line-height: 3rem;
    text-align: center;
    color: white;
    font-family: Arial;
    letter-spacing: 0.2rem;
`
