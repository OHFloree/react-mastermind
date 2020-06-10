import React, { useState } from 'react'
import styled from 'styled-components'

export default function Selector({ colors, value, handleChange, index }) {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(!isOpen)
    }

    const select = (color) => {
        handleChange(color, index)
    }

    return (
        <Select onClick={open} value={value} >
            <OptionList isOpen={isOpen}>
                {colors.map((color, i) => (
                    <Option key={i} value={color} onClick={e => select(color)} ></Option>
                ))}
            </OptionList>
        </Select>
    )
}

const Select = styled.div`
    width: 40px;
    height: 40px; 
    background-color: ${props => props.value};
    position: relative;
`

const OptionList = styled.ul`
    display: ${props => props.isOpen ? 'block' : 'none'};
    width: 100%;
    list-style-type: none;
    position: absolute;
    z-index: 3;
    top: -600%;
    left: 0;
`

const Option = styled.li`
    width: 100%;
    height: 40px;
    border: none;
    background-color: ${props => props.value};
`
