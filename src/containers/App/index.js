import React from "react"
import styled, { keyframes } from "styled-components"

import Calculator from "../../components/Calculator"

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
let GradientBackground = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB) no-repeat;
	background-size: 400% 400%;
	animation: ${gradientBackgroundAnimation} 15s linear infinite;
`
let NeonAnimation = keyframes`
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
    }
    to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
    }
`
let NeonText = styled.a`
    text-decoration: none;
    transition: all 0.5s;
    font-size: 8.5em;
    color: #228DFF;
    font-family: Impact;

    &:hover {
        color: white;
        animation: ${NeonAnimation} 1.5s ease-in-out infinite alternate;
    }
`
export default class App extends React.Component {
    render() {
        return (
            <Calculator />
        )
    }
}   