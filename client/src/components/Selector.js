import React from 'react'

export default function Selector({ colors, value, handleChange, index }) {
    return (
        <select value={value} onChange={e => handleChange(e, index)} style={{ backgroundColor: value }}>
            <option value="#000000" disabled hidden>#000000</option>
            {colors.map((color, i) => (
                <option style={{ backgroundColor: color }} key={i} value={color} >{color}</option>
            ))}
        </select>
    )
}
