import React from "react"
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

    animation: ${blinkingAnimation} .8s linear infinite;
`

let Container = styled.div`
    position: absolute;
    max-width: 100%;
    word-wrap: break-word;
    color: transparent;
`

export default (props) => {
    let { characters, position } = props
    let firstHalfOfText = characters.substring(0, position)
    let secondHalfOfText = characters.substring(position+1)

    return (
        <Container>
            {firstHalfOfText}
            <Cursor />
            {secondHalfOfText}
        </Container>
    )
}