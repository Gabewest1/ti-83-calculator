import React from "react"
import styled, { keyframes } from "styled-components"

import CalculatorButton from "../CalculatorButton"
import CalculatorScreen from "../CalculatorScreen"

let Calculator = styled.div`
    background-color: #ffd366;
    max-width: 700px;
    padding: 20px 20px;
    box-shadow: 10px 10px black;
`
let CalculatorBody = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 -10px;
`
let Numbers = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1; 
    padding: 10px;
`
let NumberButton = styled(CalculatorButton)`
    flex: 1 1 20%;

    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`
let Operations = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`
let OperationButton = styled(CalculatorButton)`
    width: 100%;

    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
        // transform: rotate(90deg);
    }
`
let Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export default (props) => {
    let btnNumbers = ["(-)",".",0,1,2,3,4,5,6,7,8,9].reverse().map((num, index) => <NumberButton key={index} animationDelay={index}>{num}</NumberButton>)
    let btnOperations = ["+", "-", "/", "*"].map((opertion, index) => <OperationButton key={index} animationDelay={index}>{opertion}</OperationButton>)
    return (
        <Calculator>
            <CalculatorScreen />
            <CalculatorBody>
                <Numbers>
                    { btnNumbers }
                </Numbers>
                <Operations>
                    { btnOperations }
                </Operations>
            </CalculatorBody>
        </Calculator>
    )
}