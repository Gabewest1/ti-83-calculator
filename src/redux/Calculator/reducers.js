import createReducer from "../utils/createReducer"
import { fromJS } from "immutable"
import types from "./types"

let initialCalculatorScreenState = fromJS({
    content: "",
})

const calculatorScreenReducer = createReducer(initialCalculatorScreenState)({
    [types.APPEND_CHARACTER]: (state, action) => {
        let { character } = action
        return state.update("content", (content) => content + character)
    }
})

export default {
    calculatorScreen: calculatorScreenReducer,
}