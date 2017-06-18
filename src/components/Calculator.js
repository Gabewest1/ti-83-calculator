import React from "react"
import styled, { keyframes } from "styled-components"

import CalculatorButton from "./CalculatorButton"
import CalculatorScreen from "./CalculatorScreen"
import CalculatorNavigationButtonGroup from "./CalculatorNavigationButtonGroup"

let CalculatorContainer = styled.div`
    border-radius: 8px;
    background-color: #262626;
    padding: 1em;
    box-shadow: -5px -5px #1a1a1a,
                -5px 5px #1a1a1a, 
                -11px 0px #1a1a1a, 
                -11px 3px #1a1a1a, 
                -11px -3px #1a1a1a, 
                -17px 0px #0d0d0d;
    font-size: 2.5vmin;
`
let CalculatorBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 -.5em;
`
let Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    position: relative;
`
let Column = styled.div`
    display: flex; 
    flex-direction: column;
`
let EmptySpace = styled(CalculatorButton)`
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    pointer-events: none;
`
let ScreenNavigationButtonsContainer = styled.div`
    flex: 1 1 auto;
    height: 100%;
    width: 30%;
`
export default class Calculator extends React.Component {  
    render() {
        let yellow = "yellow"
        let black = "#1d1d1d"
        let teal = "teal"
        let blue = "blue"
        let white = "white"
        
        let { isPowerOn, statements } = this.props
        
        return (
            <CalculatorContainer>
                <CalculatorScreen 
                    statements={statements}
                    isPowerOn={isPowerOn}
                />
                <CalculatorBody>
                    <Row>
                        <Column style={{flex: "1 1 80%", zIndex: "1"}}>
                            <Row>
                                <CalculatorButton onClick={this.props.onClick} bg={yellow}>2nd</CalculatorButton>
                                <CalculatorButton onClick={this.props.onClick} bg={black}>MODE</CalculatorButton>
                                <CalculatorButton onClick={this.props.onClick} bg={black}>DEL</CalculatorButton>
                                <EmptySpace />
                                <EmptySpace />
                            </Row>
                            <Row style={{marginBottom: 0}}>
                                <CalculatorButton onClick={this.props.onClick} bg={teal}>ALPHA</CalculatorButton>
                                <CalculatorButton onClick={this.props.onClick} bg={black}>X,T,&theta;,n</CalculatorButton>
                                <CalculatorButton onClick={this.props.onClick} bg={black}>STAT</CalculatorButton>
                                <EmptySpace />
                                <EmptySpace />                            
                            </Row>
                        </Column>
                        <Row style={{position: "absolute", top:0, left: 0, height:"100%", width:"100%"}}>
                            <div style={{flex: "1 1 65%"}}>
                                
                            </div>                            
                            
                            <ScreenNavigationButtonsContainer>
                                <CalculatorNavigationButtonGroup navigation={true} onClick={this.props.onClick}/>
                            </ScreenNavigationButtonsContainer>
                        </Row>

                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>MATH</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={blue}>APPS</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>PRGM</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>VARS</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>CLEAR</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>X-&sup1;</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>SIN</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>COS</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>TAN</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>^</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>X&sup2;</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>,</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>(</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>)</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={blue}>&divide;</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>LOG</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>7</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>8</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>9</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={blue}>&times;</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>LN</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>4</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>5</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>6</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={blue}>-</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>STO</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>1</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>2</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>3</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={blue}>+</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.props.onClick} bg={black}>ON</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>0</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>.</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={white}>(-)</CalculatorButton>
                        <CalculatorButton onClick={this.props.onClick} bg={blue}>ENTER</CalculatorButton>
                    </Row>
                </CalculatorBody>
            </CalculatorContainer>
        )
    }
}