import React from 'react'
import styled from 'styled-components'

export default function Selector(
    { colors,
        value,
        isOpen, index,
        handleChange,
        handleOpen
    }
) {

    const select = (e, color) => {
        e.stopPropagation()
        handleChange(color, index)
    }

    return (
        <Select onClick={handleOpen} value={value} isOpen={isOpen} >
            <OptionList isOpen={isOpen}>
                {colors.map((color, i) => (
                    <Option
                        key={i}
                        value={color}
                        onClick={e => select(e, color)}
                    />
                ))}
            </OptionList>
        </Select>
    )
}

const Select = styled.div`
    width: 50px;
    height: 50px; 
    background-color: ${props => props.value};
    border: 2px solid ${props => props.isOpen ? 'yellow' : 'white'};
    border-radius: 25px;
    position: relative;
    transition: 150ms ease-in-out;
`

const OptionList = styled.ul`
    display: ${props => props.isOpen ? 'block' : 'none'};
    width: 100%;
    border: 2px solid white;
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
    transition: 100ms ease-in-out;

`
