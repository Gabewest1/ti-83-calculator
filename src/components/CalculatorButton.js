import React from "react"
import styled, { keyframes } from "styled-components"

let boxShadow = "1px 4px lightgray"

let ButtonPressedAnimation = keyframes`
    50% {
        box-shadow: 0 0 black;
    }
    100% {
        box-shadow: ${boxShadow};
    }
`
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
    margin: 0 .5em;
    min-width: 3.6em;
    
    transition: all .7s ease-in-out;

    animation: ${ButtonPressedAnimation} 1s ease-in-out;
    &:focus {
        outline: none;
    }

    box-shadow: ${boxShadow};
`

export default CalculatorButton