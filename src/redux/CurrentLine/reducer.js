import createReducer from "../Utils/createReducer"
import { combineReducers } from "redux"
import { fromJS } from "immutable"
import types from "./types"
import selectors from "./selectors"

const initialCurrentLineState = fromJS({
    currentLineText: "",
    cursorIndex: 0
})

const currentLineReducer = createReducer(initialCurrentLineState)({
    [types.ADD_CHARACTER]: (state, action) => {
        console.log("Appending new character")
        let { character } = action
        let cursorIndex = state.get("cursorIndex")

        return state
                .update("currentLineText", (currentLineText) => {
                    return currentLineText.slice(0, cursorIndex) + character + currentLineText.slice(cursorIndex+1)
                })
                .update("cursorIndex", (cursorIndex) => cursorIndex+1)
    },
    [types.CLEAR_LINE]: (state, action) => {
        return state.set("currentLineText", "").set("cursorIndex", 0)
    },
    [types.MOVE_CURSOR_BACKWARDS]: (state, action) => {
        return state.update("cursorIndex", (index) => index-1)
    },
    [types.MOVE_CURSOR_FORWARDS]: (state, action) => {
        return state.update("cursorIndex", (index) => index+1)
    },
    [types.RESET_PREVIOUS_QUESTION]: (state, action) => {
        let { question } = action
        return state.set("currentLineText", question).set("cursorIndex", question.length)
    }
})

export default {
    currentLine: currentLineReducer
}