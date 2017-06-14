import React from "react"
import styled from "styled-components"
import { Field } from "redux-form"
import Cursor from "./CalculatorCursor"
import CalculatorAnswer from "./CalculatorAnswer"
import CalculatorQuestion from "./CalculatorQuestion"

let Screen = styled.div`
    overflow: hidden;
    position: relative;
    background-color: gray;
    height: 6em;
    border-right: 1px solid #1a1a1a;
    border-bottom: 1px solid #1a1a1a;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    margin-bottom: 1.5em;
    padding: .7em;
    box-sizing: border-box;
    word-wrap: break-word;
`
let HideScrollBar = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 100px; //pushes scrollbar out of sight
`

let CurrentQuestion = styled.span`
    max-width: 100%;
    word-wrap: break-word;
`

let Statement = styled.div`
    width: 100%;
`

export default class CalculatorScreen extends React.Component {
    constructor(props) {
        super(props)
        window.addEventListener("resize", this.removeAndSetMaxWidth)
    }
    componentDidMount() {
        console.log("component mounted")
        this.setScreensMaxWidth()
    }
    getScreenDomElement = () => {
        let screen = document.getElementsByName("calculatorScreen")[0]
        return screen        
    }
    removeAndSetMaxWidth = () => {
        let screen = this.getScreenDomElement()
        screen.style.maxWidth = "10000px"
        console.log("maxWidth: ", screen.style.maxWidth)
        setTimeout(this.setScreensMaxWidth, 100)
    }
    setScreensMaxWidth = () => {
        let screen = this.getScreenDomElement()        
        if(!screen) {
            setTimeout(this.setScreensMaxWidth, 100)
        } else {
            let width = window.getComputedStyle(screen, null).getPropertyValue("width")
            console.log("screen width:", width)
            screen.style.maxWidth = width
        }
    }
    render() {
        let statements = this.props.statements.map((statement, i) => {
            return (
                <Statement key={i}>
                    <CalculatorQuestion>
                        {statement.question}
                    </CalculatorQuestion>
                    <CalculatorAnswer>
                        {statement.answer}
                    </CalculatorAnswer>
                </Statement> 
            )
        })
        return (
            <Screen {...this.props}>
                <HideScrollBar>
                    { statements }
                    <CurrentQuestion>
                        {this.props.question}
                        <Cursor />
                    </CurrentQuestion>
                </HideScrollBar>
            </Screen>
        )
    }
}