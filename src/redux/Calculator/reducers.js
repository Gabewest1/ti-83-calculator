import createReducer from "../Utils/createReducer"
import { combineReducers } from "redux"
import { fromJS } from "immutable"
import types from "./types"
import selectors from "./selectors"

const initialCalculatorScreenState = fromJS({
    statements: [],
    previousQuestions: [],
    previousAnswers: [],
    previousQuestionIndex: 0
})
const calculatorScreenReducer = createReducer(initialCalculatorScreenState)({
    [types.CLEAR_SCREEN]: (state, action) => {
        return state.update("statements", (statements) => statements.clear())
    },
    [types.SAVE_ANSWER]: (state, action) => {
        let { answer } = action

        return state.update("previousAnswers", (previousAnswers) => previousAnswers.push(answer))
    },
    [types.SAVE_QUESTION]: (state, action) => {
        let { question } = action

        let stateWithNewQuestion = state.update("previousQuestions", (previousQuestions) => previousQuestions.push(question))
        let numOfQuestions = selectors.selectNumPreviousQuestions(stateWithNewQuestion)

        return stateWithNewQuestion.set("previousQuestionIndex", numOfQuestions-1)
    },
    [types.CREATE_STATEMENT]: (state, action) => {
        let { question, answer } = action
        
        return state.update("statements", (statements) => statements.push({question, answer}))
    },
    [types.DECREMENT_PREVIOUS_QUESTION_INDEX]: (state, action) => {
        return state.update("previousQuestionIndex", (index) => Math.max(index-1, 0))
    }
})

const calculatorPowerInitialState = fromJS({
    isPowerOn: true,
})
const calculatorPowerReducer = createReducer(calculatorPowerInitialState)({
    [types.TOGGLE_POWER]: (state, action) => {
        console.log("is the reducer changin the power state")
        return state.update("isPowerOn", (isPowerOn) => !isPowerOn)
    }   
})

const calculatorModeInitialState = fromJS({
    secondMode: false,
    alphaMode: false,
})

const calculatorModeReducer = createReducer(calculatorModeInitialState)({
    [types.TOGGLE_SECOND_MODE]: (state, action) => state.update("secondMode", (secondMode) => !secondMode),
    [types.TOGGLE_ALPHA_MODE]: (state, action) => state.update("alphaMode", (alpha) => !alpha),
})

export default {
    calculatorScreen: calculatorScreenReducer,
    calculatorPower: calculatorPowerReducer,
    calculatorMode: calculatorModeReducer,
}