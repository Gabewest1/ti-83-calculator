import createReducer from "../Utils/createReducer"
import { combineReducers } from "redux"
import { fromJS } from "immutable"
import types from "./types"

const initialCalculatorScreenState = fromJS({
    statements: [],
    previousQuestions: [],
    previousAnswers: []
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

        return state.update("previousQuestions", (previousQuestions) => previousQuestions.push(question))
    },
    [types.CREATE_STATEMENT]: (state, action) => {
        let { question, answer } = action
        
        return state.update("statements", (statements) => statements.push({question, answer}))
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

export default {
    calculatorScreen: calculatorScreenReducer,
    calculatorPower: calculatorPowerReducer,
}