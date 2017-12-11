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
            case (button.match(/^([0-9()])$|^([+-\u00D7\u00F7])$|^(\(-\))$|^((sin)|(cos)|(tan)|(log)|(ln))$|^(x\u00B2)$/) || {}).input: {

                let path = getState().router.location.pathname

                //Should only append characters to the screen if on the root route
                if (path !== "/") {
                    done()
                }

                if (button === "x\u00B2") {
                    button = "\u00B2"
                }

                //Check if the button pressed is the html entity &times; or &divide;
                //and convert it to its respective multiplication or division sign.
                //If the button is a negative sign which looks like => `(-)` then remove
                //the parenthesis
                if(button === "\u00D7") {
                    button = "*"
                } else if(button === "\u00F7") {
                    button = "/"
                } else if(button === "(-)") {
                    button = "\u207B"
                }

                //If button is an operation, check if there is already a question being typed,
                //if not: try to grab the previous answer if it exists and chain it
                let state = getState()
                let question = currentLineSelectors.selectFormattedCurrentLine(state.currentLine)
                let isOperation = (button === "x\u00B2" || /[-+/*^]/.test(button))
                if(isOperation && question === "") {
                    let previousAnswer = selectors.selectPreviousAnswers(state.calculatorScreen).get(0)
                    if(previousAnswer) {
                        dispatch(currentLineActions.addCharacterToScreen(previousAnswer))
                    }
                }

                if(button === "sin" || button === "cos" || button === "tan") {
                    button = button.charAt(0)
                }

                if(button === "log") {
                    button = "l"
                } else if(button === "ln") {
                    button = "n"
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
                let question = currentLineSelectors.selectFormattedCurrentLine(state.currentLine)
                let isSecondModeActive = selectors.selectSecondModeStatus(state.calculatorMode)

                if(isSecondModeActive) {
                    let allPreviousQuestions = selectors.selectPreviousQuestions(state.calculatorScreen)
                    let previousQuestionIndex = selectors.selectPreviousQuestionIndex(state.calculatorScreen)
                    let currentPreviousQuestion = allPreviousQuestions.get(previousQuestionIndex)

                    dispatch(currentLineActions.resetPreviousQuestion(currentPreviousQuestion))
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
                } finally {
                    break
                }

            }
            case "left": {
                let path = getState().router.location.pathname
                
                if(path === "/") {
                    dispatch(currentLineActions.moveCursorBackwards())
                } else if (path === "/mode") {
                    //Do nothing b/c changing item navigation index causes the calculator to break  
                } else {
                    dispatch(actions.decreaseListNavigationIndex())
                    dispatch(actions.resetItemNavigationIndex())
                }
                break
            }
            case "right": {
                let path = getState().router.location.pathname
                
                if(path === "/") {
                    dispatch(currentLineActions.moveCursorForwards())
                } else if (path === "/mode") {
                    //Do nothing b/c changing item navigation index causes the calculator to break  
                } else {
                    dispatch(actions.increaseListNavigationIndex())
                    dispatch(actions.resetItemNavigationIndex())                    
                }
                break
            }
            case "up": {
                let path = getState().router.location.pathname
                
                if(path === "/") {
                    
                } else if (path === "/mode") {
                    //Do nothing b/c changing item navigation index causes the calculator to break  
                } else {
                    dispatch(actions.decreaseItemNavigationIndex())
                }
                break
            }
            case "down": {
                let path = getState().router.location.pathname

                if(path === "/") {
                    
                } else if (path === "/mode") {
                    //Do nothing b/c changing item navigation index causes the calculator to break 
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
                    dispatch(actions.setScreen(""))
                    dispatch(push("/"))
                } else {
                    dispatch(actions.setScreen("mode"))
                    dispatch(push("/mode"))
                }

                break
            }
            case "stat":
            case "math":
            case "apps":
            case"prgm":
            case "vars": {
                dispatch(actions.setScreen(button))
                console.log("pushing button")
                dispatch(push("/"+button))
                dispatch(actions.resetTitleNavigationIndex())
                dispatch(actions.resetItemNavigationIndex())
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