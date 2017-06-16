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
            case (button.match(/^([0-9])$|^([+-\u00D7\u00F7])$/) || {}).input: {
                
                //Check if the button pressed is the html entity &times; or &divide;
                //and convert it to its respective multiplication or division sign
                if(button === "\u00D7") {
                    button = "*"
                } else if(button === "\u00F7") {
                    button = "/"
                }

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

                try {
                    let answer = executeStatement(question)
                    next(actions.createStatement(question, answer))
                } catch(e) {
                    console.log(e)
                    next(action)
                } finally {
                    break
                }

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