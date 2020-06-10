import React, { createContext, useState } from 'react'

const GameStateContext = createContext()

function GameStateProvider({ children }) {
    const [gameState, setGameState] = useState('PLAYING')

    return (
        <GameStateContext.Provider value={{ gameState, setGameState }}>
            {children}
        </GameStateContext.Provider>
    )
}

export { GameStateProvider, GameStateContext }
