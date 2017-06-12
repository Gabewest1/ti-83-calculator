import styled from "styled-components"
import { Field } from "redux-form"

let CalculatorScreen = styled.div`
    position: relative;
    background-color: gray;
    height: 5em;
    width: 100%;
    border-right: 1px solid #1a1a1a;
    border-bottom: 1px solid #1a1a1a;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    margin-bottom: 1.5em;

    &:after {
        content: "";
        background-color: #1a1a1a;
        position: absolute;
        left: ${(props) => props.characters * 3 || 3}%;
        top: 10%;
        // transform: translateY(-50%);
        width: .8em;
        height: 1.3em;
    }
`

export default CalculatorScreen