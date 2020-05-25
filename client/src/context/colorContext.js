import React, { createContext, useState } from 'react'

const ColorContext = createContext()

function ColorProvider({ children }) {
    const [colors, setColors] = useState([])

    return (
        <ColorContext.Provider value={{ colors, setColors }} >
            {children}
        </ColorContext.Provider>
    )
}

const ColorConsumer = ColorContext.Consumer

export { ColorProvider, ColorContext }