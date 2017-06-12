import { fromJS } from "immutable"

import {
    CALCULATOR_BUTTON_PRESSED
} from "../../constants/CalculatorTypes"
let initialState = fromJS({
    characters: 0
})

export default (state = initialState, action) => {
    switch(action.type) {
        case CALCULATOR_BUTTON_PRESSED:
            return state.update("characters", (characters) => characters + 1)
        default: 
            return state
    }
}

/*** ACTIONS ***/
export const pressCalculatorButton = (button) => ({ type: CALCULATOR_BUTTON_PRESSED, button })