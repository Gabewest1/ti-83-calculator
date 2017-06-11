import React from "react"
import styled from "styled-components"
import CalculatorButton from "../CalculatorButton"

//I should fix the z-index issue and needing to remove the margin
let ScreenCursorNavButton = styled(CalculatorButton)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    min-width: auto;
    z-index: 2;
    margin: 0;
`

let UpCursorButton = styled(ScreenCursorNavButton)`
    height: 1.5em;
    width: 3em;
    border-radius: 135% 135% 150% 150%;    
`
let RightCursorButton = styled(ScreenCursorNavButton)`
    width: 1.5em;
    height: 3em;
    border-radius: 150% 150% 135% 135%;    
`
let DownCursorButton = styled(ScreenCursorNavButton)`
    height: 1.5em;
    width: 3em;
    border-radius: 135% 135% 150% 150%;  
`
let LeftCursorButton = styled(ScreenCursorNavButton)`
    width: 1.5em;
    height: 3em;  
    border-radius: 150% 150% 135% 135%;    
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
    width: 100%;
    height: 100%;
`

export default (props) => {
    return (
        <Group>
            <UpCursorButton onClick={props.onClick} style={{top:0, left:"50%", transform: "translateX(-50%)"}}>
                <Triangle direction={"up"} />
            </UpCursorButton>
            <RightCursorButton onClick={props.onClick} style={{top:"50%", right: 0, transform: "translateY(-50%)"}}>
                <Triangle direction={"right"} />
            </RightCursorButton>
            <DownCursorButton onClick={props.onClick} style={{bottom:0, left:"50%", transform: "translateX(-50%)"}}>
                <Triangle direction={"down"} />
            </DownCursorButton>
            <LeftCursorButton onClick={props.onClick} style={{top:"50%", left: 0, transform: "translateY(-50%)"}}>
                <Triangle direction={"left"} />
            </LeftCursorButton>
        </Group>
    )
}