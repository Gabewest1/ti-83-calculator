import React from "react"
import styled from "styled-components"

import CalculatorButton from "../CalculatorButton"
import CalculatorScreen from "../CalculatorScreen"

let Calculator = styled.div`
    background-color: black;
    width: 80%;
    margin: 0 auto;
    padding: 20px 10px;
`

let CalculatorBody = styled.div`
    display: flex;
    justify-content: space-between;
`
let Numbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-grow: 1;
`
let Operations = styled.div`
    > * {
        display: block;
    }
`

export default (props) => {
    let btnNumbers = [0,1,2,3,4,5,6,7,8,9].map(num => <CalculatorButton>{num}</CalculatorButton>)
    let btnOperations = ["+", "-", "/", "*"].map(opertion => <CalculatorButton>{opertion}</CalculatorButton>)
    return (
        <Calculator>
            <CalculatorScreen></CalculatorScreen>
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