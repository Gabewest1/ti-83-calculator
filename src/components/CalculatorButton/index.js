import React from "react"
import styled, { keyframes } from "styled-components"

let gradientBackgroundAnimation = keyframes`
    0% {
		background-position: 0% 0%;
	}
	50% {
		background-position: 100% 100%;
	}
	100% {
		background-position: 0% 0%;
	}
`
let NeonAnimation = keyframes`
    from {
        box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
    }
    to {
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
    }
`
let CalculatorButton = styled.span`
    background-color: transparent;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid thin #ffffff;
    box-sizing: border-box;
    font-size: 5vmin;
    // margin: 5px;
    width: 30%;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB) no-repeat;
	background-size: 400% 400%;
	animation: ${gradientBackgroundAnimation} 15s linear infinite;
    animation-delay: ${(props) => props.animationDelay * 150}ms;
    
    &:hover {
        color: white;
        animation: ${gradientBackgroundAnimation, NeonAnimation} 1.5s ease-in-out infinite alternate;
    }
    
`

export default CalculatorButton