import styled, {keyframes} from "styled-components"

let blinkingAnimation = keyframes`
    to {
        opacity: 0;
    }
`
let Cursor = styled.span`
    display: inline-block;
    background-color: #1a1a1a;
    width: .7em;
    height: 1.1em;
    position: relative;
    top:3px;

    animation: ${blinkingAnimation} .8s linear infinite;
`

export default Cursor