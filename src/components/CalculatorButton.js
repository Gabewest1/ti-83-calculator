import React from "react"
import styled, { keyframes } from "styled-components"
import colorer from 'colorer'

const Button = styled.button`
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
    box-shadow: 0px 3px ${({ bg }) => bg ? colorer(bg).light(-30) : ""};

    &:active {
        box-shadow: 0px 0px ${({ bg }) => bg ? colorer(bg).light(-30) : ""};
        top: 3px;        
    }
`

export default class CalculatorButton extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick(e, onClickFromProps) {
        onClickFromProps(e)
    }
    render() {
        let onClickFromProps = this.props.onClick

        return (
            <Button 
                {...this.props} 
                onClick={(e) => this.handleClick(e, onClickFromProps)} 
            />
        )
    }
}