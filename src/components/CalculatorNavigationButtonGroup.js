import React from "react"
import styled, { keyframes } from "styled-components"
import CalculatorButton from "./CalculatorButton"
import colorer from 'colorer'

let boxShadow = "1px 4px lightgray"

//I should fix the z-index issue and needing to remove the margin
let ScreenCursorNavButton = styled(CalculatorButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: auto;
    z-index: 2;
    margin: 0;

    &:active {
        box-shadow: 0px 0px ${({ bg }) => bg ? colorer(bg).light(-30) : ""};
        ${({direction}) => {
            return direction === "up" ? "top: 3px;" : 
                   direction === "down" ? "top: -3px;" :
                   direction === "left" ? "left: 3px; top: 0;" :
                   direction === "right" ? "left: -3px; top: 0;" :
                   ""
        }}     
    }
`

let UpCursorButton = styled(ScreenCursorNavButton)`
    height: 1.5em;
    width: 3em;
    border-radius: 135% 135% 150% 150%;    
    box-shadow: 0px 3px ${({ bg }) => bg ? colorer(bg).light(-30) : ""};
`
let RightCursorButton = styled(ScreenCursorNavButton)`
    height: 3em;
    width: 1.5em;
    border-radius: 150% 150% 135% 135%;    
    box-shadow: -3px 0px ${({ bg }) => bg ? colorer(bg).light(-30) : ""}; 
`
let DownCursorButton = styled(ScreenCursorNavButton)`
    height: 1.5em;
    width: 3em;
    border-radius: 135% 135% 150% 150%;  
    box-shadow: 0px -3px ${({ bg }) => bg ? colorer(bg).light(-30) : ""};        
`
let LeftCursorButton = styled(ScreenCursorNavButton)`
    height: 3em;  
    width: 1.5em;
    border-radius: 150% 150% 135% 135%;   
    box-shadow: 3px 0px ${({ bg }) => bg ? colorer(bg).light(-30) : ""};   
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
    top: -18%;
    left: -3%;
    width: 30%;
    height: 124%;
`

let ButtonWrapper = styled.div`
    position: absolute;
    z-index: 1;
`
export default (props) => {
    return (
        <Group>
            <ButtonWrapper style={{top:0, left:"50%", transform: "translateX(-50%)"}}>
                <UpCursorButton
                    bg={"#3d34e6"}
                    data-buttonType={"navigation"}
                    onClick={props.onClick}
                    direction={"up"}
                >
                    <Triangle direction={"up"} />
                </UpCursorButton>
            </ButtonWrapper>

            <ButtonWrapper style={{top:"50%", right: 0, transform: "translateY(-50%)"}}>
                <RightCursorButton
                    bg={"#3d34e6"}
                    data-buttonType={"navigation"}
                    onClick={props.onClick}
                    direction={"right"}
                >
                    <Triangle direction={"right"} />
                </RightCursorButton>
            </ButtonWrapper>

            <ButtonWrapper style={{bottom:0, left:"50%", transform: "translateX(-50%)"}}>
                <DownCursorButton
                    bg={"#3d34e6"}
                    data-buttonType={"navigation"}
                    onClick={props.onClick}
                    direction={"down"}
                >
                    <Triangle direction={"down"} />
                </DownCursorButton>
            </ButtonWrapper>

            <ButtonWrapper style={{top:"50%", left: 0, transform: "translateY(-50%)"}}>
                <LeftCursorButton
                    bg={"#3d34e6"}
                    data-buttonType={"navigation"}
                    onClick={props.onClick}
                    direction={"left"}
                >
                    <Triangle direction={"left"} />
                </LeftCursorButton>
            </ButtonWrapper>
        </Group>
    )
}