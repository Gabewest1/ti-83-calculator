import React from "react"
import styled from "styled-components"
import { Field } from "redux-form"

let Screen = styled.div`
    display:flex;
    flex-wrap;
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
let Cursor = styled.span`
    display: inline-block;
    background-color: #1a1a1a;
    width: .7em;
    height: 1.1em;
    position: relative;
    top:3px;
`
let TextContent = styled.span`
    max-width: 100%;
    word-wrap: break-word;
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
        console.log("Rendering")
        return (
            <Screen {...this.props}>
                <TextContent>
                    {this.props.content}
                    <Cursor />
                </TextContent>
            </Screen>
        )
    }
}