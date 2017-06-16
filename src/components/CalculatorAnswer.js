import React from "react"
import styled from "styled-components"

let AnswerContainer = styled.div`
    position: relative;
    width: 100%;
`
let Answer = styled.span`
    float: right;
`

export default class CalculatorAnswer extends React.Component {
    constructor(props) {
        super(props)
        window.addEventListener("scroll", this.setAnswerContainerHeight)
    }
    componentDidMount() {
        this.setAnswerContainerHeight()
    }
    setAnswerContainerHeight = () => {
        //The AnswerContainer doesn't start with a height b/c its children
        //are out of the normal flow, so we need to find the tallest child and set 
        //that to the containers height
        console.log("setting answer container height")
        let answerContainers = document.getElementsByName("AnswerContainer")
        let thisAnswerContainer = answerContainers[answerContainers.length-1]
        let children = thisAnswerContainer.children
        let tallestChild = 0

        for(var i = 0; i<children.length; i++) {
            let child = children[i]
            let childHeight = parseInt(
                            window.getComputedStyle(child)
                                  .getPropertyValue("height")
                                  .replace("px", "")
                        )
            if(childHeight > tallestChild) {
                tallestChild = childHeight
            }
        }

        thisAnswerContainer.style.height = `${tallestChild}px`
    }
    render() {
        return (
            <AnswerContainer name="AnswerContainer">
                <Answer>{this.props.children}</Answer>
            </AnswerContainer>
        )
    }
} 