import { createLogic } from "redux-logic"

import {
    CALCULATOR_BUTTON_PRESSED,
} from "../../constants/CalculatorTypes"

export const handleButtonClick = createLogic({
    type: CALCULATOR_BUTTON_PRESSED,
    process({getState, action}, dispatch, done) {
        console.log("CalcScreen handle button click")
        done()
    }
})