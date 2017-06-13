import React from "react"
import styled, { keyframes } from "styled-components"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { reduxForm } from "redux-form"

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
`
let ScreenNavigationButtonsContainer = styled.div`
    flex: 1 1 auto;
    height: 100%;
    width: 30%;
`
class Calculator extends React.Component {  
    handleButtonClick(e) {
        let target = e.target
        let buttonJustClicked = target.textContent
        this.props.handleButtonClick(target.textContent)
    }
    render() {
        let yellow = "yellow"
        let black = "#1d1d1d"
        let teal = "teal"
        let blue = "blue"
        let white = "white"
        
        console.log("props:", this.props)
        let characters = this.props.characters
        let content = this.props.calculatorScreen.get("content")
        console.log("content:", content)
        return (
            <CalculatorContainer>
                <CalculatorScreen 
                    name="calculatorScreen" 
                    component="input" 
                    onChange={(e) => e.preventDefault()} 
                    characters={characters}
                    content={content}
                />
                <CalculatorBody>
                    <Row>
                        <Column style={{flex: "1 1 80%", zIndex: "1"}}>
                            <Row>
                                <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={yellow}>2nd</CalculatorButton>
                                <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>MODE</CalculatorButton>
                                <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>DEL</CalculatorButton>
                                <EmptySpace />
                                <EmptySpace />
                            </Row>
                            <Row style={{marginBottom: 0}}>
                                <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={teal}>ALPHA</CalculatorButton>
                                <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>X,T,&theta;,n</CalculatorButton>
                                <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>STAT</CalculatorButton>
                                <EmptySpace />
                                <EmptySpace />                            
                            </Row>
                        </Column>
                        <Row style={{position: "absolute", top:0, left: 0, height:"100%", width:"100%"}}>
                            <div style={{flex: "1 1 65%"}}>
                                
                            </div>                            
                            
                            <ScreenNavigationButtonsContainer>
                                <CalculatorNavigationButtonGroup onClick={this.handleButtonClick.bind(this)}/>
                            </ScreenNavigationButtonsContainer>
                        </Row>

                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>MATH</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={blue}>APPS</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>PRGM</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>VARS</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>CLEAR</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>X-&sup1;</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>SIN</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>COS</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>TAN</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>^</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>X&sup2;</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>,</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>(</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>)</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={blue}>&divide;</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>LOG</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>7</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>8</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>9</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={blue}>&times;</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>LN</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>4</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>5</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>6</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={blue}>-</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>STO</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>1</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>2</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>3</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={blue}>+</CalculatorButton>
                    </Row>
                    <Row>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={black}>ON</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>0</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>.</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={white}>(-)</CalculatorButton>
                        <CalculatorButton onClick={this.handleButtonClick.bind(this)} bg={blue}>ENTER</CalculatorButton>
                    </Row>
                </CalculatorBody>
            </CalculatorContainer>
        )
    }
}


export default reduxForm({
    form: "calculator"
})(Calculator)