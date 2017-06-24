import React from "react"
import styled, { keyframes } from "styled-components"
import CalculatorButton from "./CalculatorButton"

let boxShadow = "1px 4px lightgray"

//I should fix the z-index issue and needing to remove the margin
let ScreenCursorNavButton = styled(CalculatorButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    min-width: auto;
    z-index: 2;
    margin: 0;
    border: none;
`

let LeftButtonPressedAnimation = keyframes`
    50% {
        box-shadow: 0 2px black;
        left: 3px;
    }
    100% {
        box-shadow: ${boxShadow};
        left: 0px;
    }
`

let RightButtonPressedAnimation = keyframes`
    50% {
        box-shadow: 0 2px black;
        right: 3px;
    }
    100% {
        box-shadow: ${boxShadow};
        right: 0px;
    }
`

let UpCursorButton = styled(ScreenCursorNavButton)`
    height: 1.5em;
    width: 3em;
    border-radius: 135% 135% 150% 150%;    
    box-shadow: 0px 3px lightgray;
`
let RightCursorButton = styled(ScreenCursorNavButton)`
    width: 1.5em;
    height: 3em;
    border-radius: 150% 150% 135% 135%;    
    box-shadow: -1px 0px lightgray; 
    
    ${(props) => props.isClicked && `animation: ${RightButtonPressedAnimation} .1s ease-in-out`}; 
`
let DownCursorButton = styled(ScreenCursorNavButton)`
    height: 1.5em;
    width: 3em;
    border-radius: 135% 135% 150% 150%;  
    box-shadow: 0px 2px lightgray;        
`
let LeftCursorButton = styled(ScreenCursorNavButton)`
    width: 1.5em;
    height: 3em;  
    border-radius: 150% 150% 135% 135%;   
    box-shadow: 2px 1px lightgray;   

    ${(props) => props.isClicked && `animation: ${LeftButtonPressedAnimation} .1s ease-in-out`}; 
`
//Default Triangle points right
let Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-top: .5em solid transparent;
    border-bottom: .5em solid transparent;
    border-left: .5em solid white;

    transform: ${({direction}) => {
        return direction === "up" ? "rotate(-90deg)" : 
               direction === "down" ? "rotate(90deg)" :
               direction === "left" ? "rotate(180deg)" :
               "none"
    }};

`

let Group = styled.div`
    position: relative;
    top: -26%;
    left: -3%;
    width: 30%;
    height: 135%;
`

let ButtonWrapper = styled.div`
    position: absolute;
    z-index: 1;
`
export default (props) => {
    return (
        <Group>
            <ButtonWrapper style={{top:0, left:"50%", transform: "translateX(-50%)"}}>
                <UpCursorButton data-buttonType={"navigation"} onClick={props.onClick} >
                    <Triangle direction={"up"} />
                </UpCursorButton>
            </ButtonWrapper>

            <ButtonWrapper style={{top:"50%", right: 0, transform: "translateY(-50%)"}}>
                <RightCursorButton data-buttonType={"navigation"} onClick={props.onClick} >
                    <Triangle direction={"right"} />
                </RightCursorButton>
            </ButtonWrapper>

            <ButtonWrapper style={{bottom:0, left:"50%", transform: "translateX(-50%)"}}>
                <DownCursorButton data-buttonType={"navigation"} onClick={props.onClick} >
                    <Triangle direction={"down"} />
                </DownCursorButton>
            </ButtonWrapper>

            <ButtonWrapper style={{top:"50%", left: 0, transform: "translateY(-50%)"}}>
                <LeftCursorButton data-buttonType={"navigation"} onClick={props.onClick} >
                    <Triangle direction={"left"} />
                </LeftCursorButton>
            </ButtonWrapper>
        </Group>
    )
}