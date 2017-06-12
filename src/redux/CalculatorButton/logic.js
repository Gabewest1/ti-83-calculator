import { createLogic } from "redux-logic"

import {
    CALCULATOR_BUTTON_PRESSED,
} from "../../constants/CalculatorTypes"

export const handleButtonClicks = createLogic({
    type: CALCULATOR_BUTTON_PRESSED,
    process({getState, action}, dispatch, done) {
        console.log("CalcButton handle button click")
        done()
    }
})
