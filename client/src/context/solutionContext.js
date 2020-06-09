import React, { createContext, useState } from 'react'

const SolutionContext = createContext()

function SolutionProvider({ children }) {
    const [solution, setSolution] = useState(['#000000', '#000000', '#000000', '#000000'])

    return (
        <SolutionContext.Provider value={{ solution, setSolution }}>
            {children}
        </SolutionContext.Provider>
    )
}

export { SolutionProvider, SolutionContext }
