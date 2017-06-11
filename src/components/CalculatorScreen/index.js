import styled from "styled-components"
import { Field } from "redux-form"

let CalculatorScreen = styled(Field)`
    background-color: gray;
    height: 4em;
    margin-bottom: 1.5em;
    width: 100%;

    &::-webkit-input-placeholder {
        color: red;
        width: 10px;
    }
`

export default CalculatorScreen