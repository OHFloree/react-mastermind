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
    width: 50px;
    height: 50px; 
    background-color: ${props => props.value};
    border: 2px solid #4f5b62;
    border-radius: 25px;
    position: relative;
    transition: 150ms ease-in-out;
    &&:hover {
        border-color: yellow;
    }
`

const OptionList = styled.ul`
    display: ${props => props.isOpen ? 'block' : 'none'};
    width: 100%;
    border: 2px solid #4f5b62;
    border-radius: 25px;
    overflow: hidden;
    list-style-type: none;
    position: absolute;
    z-index: 3;
    top: -700%;
    left: 0;
`

const Option = styled.li`
    width: 100%;
    height: 50px;
    border: none;
    background-color: ${props => props.value};
    border: 2px solid ${props => props.value};
    transition: 100ms ease-in;
    &&: hover {
        border 2px solid yellow;
    }
    &&:first-child {
        border-radius: 25px 25px 0px 0px;
    }
    &&:last-child {
        border-radius: 0px 0px 25px 25px;
    }
`
