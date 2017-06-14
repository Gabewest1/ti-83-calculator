import createReducer from "../utils/createReducer"
import { fromJS } from "immutable"
import types from "./types"

const initialCalculatorScreenState = fromJS({
    question: "",
    previousQuestions: [],
    previousAnswers: []
})

const calculatorScreenReducer = createReducer(initialCalculatorScreenState)({
    [types.ADD_CHARACTER]: (state, action) => {
        console.log("Appending new character")
        let { character } = action
        return state.update("question", (question) => question + character)
    },
    [types.CLEAR_SCREEN]: (state, action) => {
        return state.set("question", "")
    },
    [types.BUTTON_CLICK_ANIMATION_STARTED]: (state, action) => {
        return state
    },
    [types.SAVE_ANSWER]: (state, action) => {
        let { answer } = action

        return state.update("previousAnswers", (previousAnswers) => previousAnswers.push(answer))
    },
    [types.SAVE_QUESTION]: (state, action) => {
        let { question } = action

        return state.update("previousQuestions", (previousQuestions) => previousQuestions.push(question))
    },
    [types.CLEAR_LINE]: (state, action) => {
        return state.set("question", "")
    }
})

export default {
    calculatorScreen: calculatorScreenReducer,
}