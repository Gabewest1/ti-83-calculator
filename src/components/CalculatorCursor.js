import React from "react"
import styled, {keyframes} from "styled-components"

let blinkingAnimation = keyframes`
    to {
        opacity: 0;
    }
`
let Cursor = styled.div`
    display: inline-block;
    background-image: url(${
        (props) => props.secondMode ? "cursor--2nd.png" :
                   props.alphaMode ? "cursor--alpha.png" :
                   "cursor.png"
        });
    background-size: 100% 100%;
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
    let { characters, position, secondMode, alphaMode } = props
    let firstHalfOfText = characters.substring(0, position)
    let secondHalfOfText = characters.substring(position+1)

    console.log("MODES:", secondMode, alphaMode)
    return (
        <Container>
            {firstHalfOfText}
            <Cursor secondMode={secondMode} alphaMode={alphaMode} />
            {secondHalfOfText}
        </Container>
    )
}