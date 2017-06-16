import React from "react"
import styled from "styled-components"
import CalculatorCuror from "./CalculatorCursor"

let CurrentLineContainer = styled.span`
    max-width: 100%;
    word-wrap: break-word;
`

export default class CurrentLine extends React.Component {
    render() {
        let { cursorIndex, currentLineText } = this.props
        let firstHalfOfText = currentLineText.substring(0, cursorIndex)
        let secondHalfOfText = currentLineText.substring(cursorIndex+1)

        return (
            <CurrentLineContainer>
                {firstHalfOfText}
                <CalculatorCuror />
                {secondHalfOfText}
            </CurrentLineContainer>
        )
    }
}