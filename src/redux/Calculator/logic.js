import { createLogic } from "redux-logic"
import { push } from "react-router-redux"
import types from "./types"
import actions from "./actions"
import selectors from "./selectors"
import {operations as currentLineActions, selectors as currentLineSelectors, types as currentLineTypes } from "../CurrentLine"
import {
    handleEnterButton,
    executeStatement
} from "./utils"

export const handleCalculatorButtonClick = createLogic({
    type: types.BUTTON_PRESSED,
    validate({getState, action}, next, reject) {
        let state = getState()
        let button = action.button.toLowerCase()
        let isCalculatorOn = selectors.selectPowerStatus(state.calculatorPower)

        if(!isCalculatorOn) {
            if(button === "on") {
                next(action)
            } else {
                reject(actions.startButtonClickAnimation(action.button))
            }
        } else {
            next(action)
        }
    },
    process({getState, action}, dispatch, done) {
        let { button } = action
        button = button.toLowerCase()
        console.log("button:", button)
        dispatch(actions.startButtonClickAnimation(action.button))
        
        switch(button) {
            case (button.match(/^([0-9()])$|^([+-\u00D7\u00F7])$|^(\(-\))$/) || {}).input: {

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

                dispatch(currentLineActions.addCharacterToScreen(button))
                break
            }
            case "clear": {
                let shouldClearEntireScreen = currentLineSelectors.selectCursorIndex(getState().currentLine) <= 0

                if(shouldClearEntireScreen) {
                    dispatch(actions.clearCalculatorScreen())
                } else {
                    dispatch(currentLineActions.clearLine())
                }
                
                break
            }
            case "enter": {
                let state = getState()
                let question = currentLineSelectors.selectCurrentLine(state.currentLine)
                let isSecondModeActive = selectors.selectSecondModeStatus(state.calculatorMode)

                if(isSecondModeActive) {
                    let previousQuestions = selectors.selectPreviousQuestions(state.calculatorScreen)
                    let previousQuestionIndex = selectors.selectPreviousQuestionIndex(state.calculatorScreen)
                    dispatch(currentLineActions.resetPreviousQuestion(previousQuestions.get(previousQuestionIndex)))
                    break
                }

                if(question === "") {
                    break
                }

                try {
                    let answer = executeStatement(question)
                    dispatch(actions.createStatement(question, answer))
                } catch(e) {
                    console.log(e)
                    dispatch(action)
                } finally {
                    break
                }

            }
            case "left": {
                let path = getState().router.location.path
                if(path === "/") {
                    dispatch(currentLineActions.moveCursorBackwards())
                } else {
                    dispatch(actions.decreaseListNavigationIndex())
                }
                break
            }
            case "right": {
                let path = getState().router.location.path
                if(path === "/") {
                    dispatch(currentLineActions.moveCursorForwards())
                } else {
                    dispatch(actions.increaseListNavigationIndex())
                }
                break
            }
            case "up": {
                let path = getState().router.location.path
                if(path === "/") {
                    
                } else {
                    dispatch(actions.decreaseItemNavigationIndex())
                }
                break
            }
            case "down": {
                let path = getState().router.location.path
                if(path === "/") {
                    
                } else {
                    dispatch(actions.increaseItemNavigationIndex())
                }
                break
            }
            case "on": {
                let state = getState()
                let isCalculatorOn = selectors.selectPowerStatus(state.calculatorPower)
                let isSecondModeActive = selectors.selectSecondModeStatus(state.calculatorMode)

                if(!isCalculatorOn) {
                    dispatch(actions.toggleCalculatorPower())                                    
                } else if(isCalculatorOn && isSecondModeActive) {
                    dispatch(actions.toggleCalculatorPower())                
                }

                break
            }
            case "2nd": {
                let isAlphaModeActive = selectors.selectAlphaModeStatus(getState().calculatorMode)
                if(isAlphaModeActive) {
                    dispatch(actions.toggleAlphaMode())
                }

                dispatch(actions.toggleSecondMode())
                break
            }
            case "alpha": {
                let isSecondModeActive = selectors.selectSecondModeStatus(getState().calculatorMode)
                if(isSecondModeActive) {
                    dispatch(actions.toggleSecondMode())
                }

                dispatch(actions.toggleAlphaMode())
                break
            }
            case "mode": {
                let isSecondModeActive = selectors.selectSecondModeStatus(getState().calculatorMode)
                if(isSecondModeActive) {
                    dispatch(push("/"))
                } else {
                    dispatch(push("/mode"))
                }

                break
            }
            case "stat":
            case "math":
            case "apps":
            case"prgm":
            case "vars": {
                console.log("pushing button")
                dispatch(push("/"+button))
            }
            default:
                break
        }

        //2nd and alpha should always be turned off after a new button is pressed
        if(button !== "2nd" && button !== "alpha") {
            let isAlphaModeActive = selectors.selectAlphaModeStatus(getState().calculatorMode)
            let isSecondModeActive = selectors.selectSecondModeStatus(getState().calculatorMode)
            if(isAlphaModeActive) {
                dispatch(actions.toggleAlphaMode())
            } else if(isSecondModeActive) {
                dispatch(actions.toggleSecondMode())
            }
        }

        done()
    }
})

export const createStatement = createLogic({
    type: types.CREATE_STATEMENT,
    process({getState, action}, dispatch, done) {
        let {question, answer} = action
        dispatch(currentLineActions.clearLine())
        dispatch(actions.saveQuestion(question))
        dispatch(actions.saveAnswer(answer))
        done()
    }
})

export const resetPreviousQuestion = createLogic({
    type: currentLineTypes.RESET_PREVIOUS_QUESTION,
    process({getState, action}, dispatch, done) {
        dispatch(actions.decrementPreviousQuestionIndex())
        done()
    }
})