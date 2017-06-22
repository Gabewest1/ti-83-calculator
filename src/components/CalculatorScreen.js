import React from "react"
import styled from "styled-components"
import { Field } from "redux-form"
import CurrentLineContainer from "../containers/CurrentLineContainer"
import ScreenListContainer from "../containers/ScreenListContainer"
import CalculatorAnswer from "./CalculatorAnswer"
import CalculatorQuestion from "./CalculatorQuestion"

let Screen = styled.div`
    overflow: hidden;
    position: relative;
    background-color: gray;
    height: 9em;
    width: 100%;
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
        screen.style.maxWidth = "100%"
        console.log("maxWidth: ", screen.style.maxWidth)
        setTimeout(this.setScreensMaxWidth, 100)
    }
    setScreensMaxWidth = () => {
        let screen = this.getScreenDomElement()        
        let width = window.getComputedStyle(screen, null).getPropertyValue("width")
        console.log("screen width:", width)
        screen.style.maxWidth = width
    }
    scrollToBottomOfScreen = () => {
        let screen = this.getScreenDomElement()
        if(!screen) {
            return
        }
        let screensOverflowContainerElement = screen.children[0]
        console.log(screensOverflowContainerElement)

        if(!screensOverflowContainerElement) {
            return
        }
        let clientHeight = screensOverflowContainerElement.clientHeight
        let scrollHeight = screensOverflowContainerElement.scrollHeight

        if(scrollHeight > clientHeight) {
            screensOverflowContainerElement.scrollTop = Number.MAX_SAFE_INTEGER
        }
    }
    render() {
        let { isPowerOn, statements } = this.props
        setTimeout(()=> this.scrollToBottomOfScreen(), 0)
        statements = statements.map((statement, i) => {
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
                    {/*<HideScrollBar>
                        { statements }
                        <CurrentLineContainer />
                    </HideScrollBar>*/}

        if(isPowerOn) {
            return (
                <Screen {...this.props} name="calculatorScreen">
                    <ScreenListContainer />
                </Screen>
            )
        } else {
            return (
                <Screen {...this.props} name="calculatorScreen">

                </Screen>
            )
        }
    }
}