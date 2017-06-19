import React from "react"
import styled from "styled-components"
import CalculatorCursor from "./CalculatorCursor"

let Container = styled.div`
    position: relative;
`
let TextWrapper = styled.div`
    position: absolute;
    z-index: 10;
    max-width: 100%;
    word-wrap: break-word;
`

export default class CurrentLine extends React.Component {
    render() {
        let { cursorIndex, currentLineText, isInSecondMode, isInAlphaMode } = this.props

        return (
            <Container>
                <TextWrapper>
                    {currentLineText}
                </TextWrapper>
                <CalculatorCursor 
                    characters={currentLineText} 
                    position={cursorIndex}
                    secondMode={isInSecondMode}
                    alphaMode={isInAlphaMode}    
                />
            </Container>
        )
    }
}