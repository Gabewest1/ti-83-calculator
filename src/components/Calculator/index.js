import React from "react"
import styled, { keyframes } from "styled-components"

import CalculatorButton from "../CalculatorButton"
import CalculatorScreen from "../CalculatorScreen"

let Calculator = styled.div`
    border-radius: 8px;
    background-color: #0c0c0c;
    padding: 1em;
    box-shadow: 4px 5px #676565;
    font-size: 20px;
`
let CalculatorBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
let Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
`
let Column = styled.div`
    display: flex; 
    flex-direction: column;
`
let EmptySpace = styled(CalculatorButton)`
    background: transparent;
    border: none;
    outline: none;
`
export default (props) => {
    let yellow = "yellow"
    let black = "black"
    let teal = "teal"
    let blue = "blue"
    let white = "white";

    return (
        <Calculator>
            <CalculatorScreen />
            <CalculatorBody>
                <Row>
                    <Column style={{flex: "1 1 80%"}}>
                        <Row>
                            <CalculatorButton bg={yellow}>2nd</CalculatorButton>
                            <CalculatorButton bg={black}>MODE</CalculatorButton>
                            <CalculatorButton bg={black}>DEL</CalculatorButton>
                            <EmptySpace />
                            <EmptySpace />
                        </Row>
                        <Row style={{marginBottom: 0}}>
                            <CalculatorButton bg={teal}>ALPHA</CalculatorButton>
                            <CalculatorButton bg={black}>X,T,&theta;,n</CalculatorButton>
                            <CalculatorButton bg={black}>STAT</CalculatorButton>
                            <EmptySpace />
                            <EmptySpace />                            
                        </Row>
                    </Column>
                    
                </Row>
                <Row>
                    <CalculatorButton bg={black}>MATH</CalculatorButton>
                    <CalculatorButton bg={blue}>APPS</CalculatorButton>
                    <CalculatorButton bg={black}>PRGM</CalculatorButton>
                    <CalculatorButton bg={black}>VARS</CalculatorButton>
                    <CalculatorButton bg={black}>CLEAR</CalculatorButton>
                </Row>
                <Row>
                    <CalculatorButton bg={black}>X-&sup1;</CalculatorButton>
                    <CalculatorButton bg={black}>SIN</CalculatorButton>
                    <CalculatorButton bg={black}>COS</CalculatorButton>
                    <CalculatorButton bg={black}>TAN</CalculatorButton>
                    <CalculatorButton bg={black}>^</CalculatorButton>
                </Row>
                <Row>
                    <CalculatorButton bg={black}>X&sup2;</CalculatorButton>
                    <CalculatorButton bg={black}>,</CalculatorButton>
                    <CalculatorButton bg={black}>(</CalculatorButton>
                    <CalculatorButton bg={black}>)</CalculatorButton>
                    <CalculatorButton bg={blue}>&divide;</CalculatorButton>
                </Row>
                <Row>
                    <CalculatorButton bg={black}>LOG</CalculatorButton>
                    <CalculatorButton bg={white}>7</CalculatorButton>
                    <CalculatorButton bg={white}>8</CalculatorButton>
                    <CalculatorButton bg={white}>9</CalculatorButton>
                    <CalculatorButton bg={blue}>&times;</CalculatorButton>
                </Row>
                <Row>
                    <CalculatorButton bg={black}>LN</CalculatorButton>
                    <CalculatorButton bg={white}>4</CalculatorButton>
                    <CalculatorButton bg={white}>5</CalculatorButton>
                    <CalculatorButton bg={white}>6</CalculatorButton>
                    <CalculatorButton bg={blue}>-</CalculatorButton>
                </Row>
                <Row>
                    <CalculatorButton bg={black}>STO</CalculatorButton>
                    <CalculatorButton bg={white}>1</CalculatorButton>
                    <CalculatorButton bg={white}>2</CalculatorButton>
                    <CalculatorButton bg={white}>3</CalculatorButton>
                    <CalculatorButton bg={blue}>+</CalculatorButton>
                </Row>
                <Row>
                    <CalculatorButton bg={black}>ON</CalculatorButton>
                    <CalculatorButton bg={white}>0</CalculatorButton>
                    <CalculatorButton bg={white}>.</CalculatorButton>
                    <CalculatorButton bg={white}>(-)</CalculatorButton>
                    <CalculatorButton bg={blue}>ENTER</CalculatorButton>
                </Row>
            </CalculatorBody>
        </Calculator>
    )
}