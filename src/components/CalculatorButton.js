import React from "react"
import styled, { keyframes } from "styled-components"

let boxShadow = "1px 4px #353333"

let ButtonPressedAnimation = keyframes`
    50% {
        box-shadow: 0 2px black;
        top: 3px;
    }
    100% {
        box-shadow: 1px 3px ${(props) => props.bg};
        top: 0px;
    }
`
let Button = styled.button`
    font-size: inherit;
    position: relative;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    background: ${(props) => props.bg};
    color: ${(props) => props.bg === "#ffffff" ? "black" : "white"};
    border-radius: 5px;
    justify-content: center;
    border: solid thin ${(props) => props.bg === "#ffffff" ? "black" : "white"};
    box-sizing: border-box;
    padding: 3px 0;
    min-width: 3.6em;
    outline: none;
    margin: 0 5px;
    transition: all .7s ease-in-out;

    ${(props) => props.isClicked && `animation: ${ButtonPressedAnimation} .1s ease-in-out`};

    box-shadow: 1px 3px ${(props) => props.bg};
`

export default class CalculatorButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false
        }
    }
    handleClick(e, onClickFromProps) {
        this.setState({isClicked: true})
        onClickFromProps(e)
    }
    render() {
        let onClickFromProps = this.props.onClick

        return (
            <Button 
                {...this.props} 
                onClick={(e) => this.handleClick(e, onClickFromProps)} 
                isClicked={this.state.isClicked} 
                onAnimationEnd={() => this.setState({isClicked: false})}
            />
        )
    }
}