import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    height: ${props => props.scale || 1 * 3}rem;
    width: ${props => props.scale || 1 * 3}rem;
    border: 3px solid rgba(255, 255, 255, 0.4);
    border-top-color: white;
    border-radius: 50%;
    animation: ${spin} 0.7s linear infinite;
`

export default Spinner