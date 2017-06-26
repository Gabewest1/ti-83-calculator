import React from "react"
import styled from "styled-components"

let QuestionContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: .7em
`
let Question = styled.span`
    
`

export default (props) => {
    return (
        <QuestionContainer>
            <Question>{props.children}</Question>
        </QuestionContainer>
    )
}