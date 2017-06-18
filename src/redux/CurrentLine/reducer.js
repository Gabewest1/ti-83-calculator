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
                    return currentLineText.slice(0, cursorIndex) + character + currentLineText.slice(cursorIndex)
                })
                .update("cursorIndex", (cursorIndex) => cursorIndex+1)
    },
    [types.CLEAR_LINE]: (state, action) => {
        return state.set("currentLineText", "").set("cursorIndex", 0)
    },
    [types.MOVE_CURSOR_BACKWARDS]: (state, action) => {
        let currentIndex = selectors.selectCursorIndex(state)

        if(currentIndex > 0) {
            return state.update("cursorIndex", (cursorIndex) => currentIndex - 1)
        } else {
            return state
        }
    },
    [types.MOVE_CURSOR_FORWARDS]: (state, action) => {
        let currentIndex = selectors.selectCursorIndex(state)        
        let numOfCharacters = selectors.selectCurrentLine(state).length

        if(currentIndex < numOfCharacters) {
            return state.update("cursorIndex", (cursorIndex) => currentIndex + 1)
        } else {
            return state
        }
    }
})

export default {
    currentLine: currentLineReducer
}