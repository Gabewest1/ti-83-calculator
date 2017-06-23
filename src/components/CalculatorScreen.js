import React from "react"
import styled from "styled-components"
import { Field } from "redux-form"
import { Route, Switch } from "react-router"
import CurrentLineContainer from "../containers/CurrentLineContainer"
import ScreenContainer from "../containers/ScreenContainer"
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
    box-sizing: border-box;
    word-wrap: break-word;
`
let HideScrollBar = styled.div`
    width: 100%;
    height: 100%;
    padding: .5em 100px 0 .5em;
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

class CalculatorScreen extends React.Component {
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
    renderDefaultScreen = () => {
        setTimeout(()=> this.scrollToBottomOfScreen(), 0)

        return (
            <div>
                { 
                    this.props.statements.map((statement, i) => {
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
                }
                <CurrentLineContainer />
            </div>
        )
    }

    render() {
        let { isPowerOn, statements } = this.props
        
        if(isPowerOn) {
            return (
                <Screen name="calculatorScreen">
                    <HideScrollBar>
                        <Switch>
                            <Route exact path="/" render={this.renderDefaultScreen} />
                            <Route path="/mode" component={ScreenContainer} />
                            <Route path="/stat" component={ScreenContainer} />
                            <Route path="/math" component={ScreenContainer} />
                            <Route path="/apps" component={ScreenContainer} />
                            <Route path="/prgm" component={ScreenContainer} />
                            <Route path="/vars" component={ScreenContainer} />
                        </Switch>
                    </HideScrollBar>
                </Screen>
            )
        } else {
            return (
                <Screen name="calculatorScreen">

                </Screen>
            )
        }
    }
}

export default CalculatorScreen