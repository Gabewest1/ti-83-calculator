import { createLogic } from "redux-logic"
import types from "./types"
import actions from "./actions"
import selectors from "./selectors"
import {
    handleEnterButton,
    executeStatement
} from "./utils"
export const handleCalculatorButtonClick = createLogic({
    type: types.BUTTON_PRESSED,
    transform({getState, action}, next, reject) {
        let { button } = action
        button = button.toLowerCase()
        console.log(button)
        switch(button) {
            case (button.match(/([0-9])|([+-])/) || {}).input: {
                next(actions.addCharacterToScreen(button))
                break
            }
            case "clear": {
                next(actions.clearCalculatorScreen())
                break
            }
            case "enter": {
                let state = getState().calculatorScreen
                let question = selectors.selectQuestion(state)
                let answer = executeStatement(question)
                next(actions.createStatement(question, answer))
                break
            }
            default:
                next(action)
        }
    },
    process({getState, action}, dispatch, done) {
        dispatch(actions.startButtonClickAnimation(action.button))
        done()
    }
})

export const createStatement = createLogic({
    type: types.CREATE_STATEMENT,
    process({getState, action}, dispatch, done) {
        let {question, answer} = action
        console.log("Start")
        dispatch(actions.clearLine())
        console.log("After clearLine, before saveQuestion")
        dispatch(actions.saveQuestion(question))
        console.log("After saveQuestion before saveAnswer")
        dispatch(actions.saveAnswer(answer))
        console.log("After saveAnswer")
        console.log("End")
        done()
    }
})