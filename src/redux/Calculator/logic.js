import { createLogic } from "redux-logic"
import types from "./types"
import actions from "./actions"
import selectors from "./selectors"
import {operations as currentLineActions, selectors as currentLineSelectors } from "../CurrentLine"
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
            case (button.match(/^([0-9])$|^([+-\u00D7\u00F7])$|^(\(-\))$/) || {}).input: {
                //Check if the button pressed is the html entity &times; or &divide;
                //and convert it to its respective multiplication or division sign.
                //If the button is a negative sign which looks like => `(-)` then remove
                //the parenthesis
                if(button === "\u00D7") {
                    button = "*"
                } else if(button === "\u00F7") {
                    button = "/"
                } else if(button === "(-)") {
                    button = "-"
                }

                console.log("adding button to screen: ", button)
                next(currentLineActions.addCharacterToScreen(button))
                break
            }
            case "clear": {
                let shouldClearEntireScreen = currentLineSelectors.selectCursorIndex(getState().currentLine) <= 0

                if(shouldClearEntireScreen) {
                    next(actions.clearCalculatorScreen())
                } else {
                    next(currentLineActions.clearLine())
                }
                
                break
            }
            case "enter": {
                let state = getState().currentLine
                let question = currentLineSelectors.selectCurrentLine(state)

                if(question === "") {
                    break
                }

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
            case "left": {
                next(currentLineActions.moveCursorBackwards())
            }
            case "right": {
                next(currentLineActions.moveCursorForwards())
            }
            case "on": {
                next(actions.toggleCalculatorPower())
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
        dispatch(currentLineActions.clearLine())
        console.log("After clearLine, before saveQuestion")
        dispatch(actions.saveQuestion(question))
        console.log("After saveQuestion before saveAnswer")
        dispatch(actions.saveAnswer(answer))
        console.log("After saveAnswer")
        console.log("End")
        done()
    }
})