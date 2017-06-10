import React from "react"
import styled, { keyframes } from "styled-components"

let CalculatorButton = styled.button`
    font-size: inherit;
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    background: ${(props) => props.bg};
    color: ${(props) => props.bg === "white" ? "black" : "white"};
    border-radius: 5px;
    justify-content: center;
    border: solid thin #ffffff;
    box-sizing: border-box;
    padding: 3px 0;
    min-width: 3.6em;
`

export default CalculatorButton