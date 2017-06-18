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
        let increaseCursorIndexAmount = 1

        //if the character is an operation, then add a space before and after it.
        if(character.search(/[*+-/]/) !== -1) {
            character = " ".concat(character).concat(" ")
            increaseCursorIndexAmount += 2
        }
        
        return state
                .update("currentLineText", (currentLineText) => {
                    return currentLineText.slice(0, cursorIndex) + character + currentLineText.slice(cursorIndex)
                })
                .update("cursorIndex", (cursorIndex) => cursorIndex+increaseCursorIndexAmount)
    },
    [types.CLEAR_LINE]: (state, action) => {
        return state.set("currentLineText", "").set("cursorIndex", 0)
    },
    [types.MOVE_CURSOR_BACKWARDS]: (state, action) => {
        let currentLine = selectors.selectCurrentLine(state)
        let currentIndex = selectors.selectCursorIndex(state)

        //Need to find the next index that isn't a blank space before moving cursor
        if(currentIndex > 0) {
            let newIndex = currentIndex - 1
            while(currentLine[newIndex] === " ") {
                newIndex--
            }

            return state.set("cursorIndex", newIndex)
        } else {
            return state
        }
    },
    [types.MOVE_CURSOR_FORWARDS]: (state, action) => {
        let currentLine = selectors.selectCurrentLine(state)        
        let numOfCharacters = currentLine.length
        let currentIndex = selectors.selectCursorIndex(state)        

        //Need to find the next index that isn't a blank space before moving cursor        
        if(currentIndex < numOfCharacters) {
            let newIndex = currentIndex + 1
            while(currentLine[newIndex] === " ") {
                newIndex++
            }

            return state.set("cursorIndex", newIndex)
        } else {
            return state
        }
    }
})

export default {
    currentLine: currentLineReducer
}