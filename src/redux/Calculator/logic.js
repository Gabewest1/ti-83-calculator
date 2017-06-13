import { createLogic } from "redux-logic"
import types from "./types"
import actions from "./actions"

export const handleCalculatorButtonClick = createLogic({
    type: types.BUTTON_PRESSED,
    process({getState, action}, dispatch, done) {
        console.log("About to append new character")
        dispatch(actions.appendCharacter(action.button))
    }
})