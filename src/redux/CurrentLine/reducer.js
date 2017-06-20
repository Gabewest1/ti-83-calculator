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
        let cursorIndex = selectors.selectCursorIndex(state)
        let currentLineText = selectors.selectCurrentLine(state)
        let characterToBeReplaced = currentLineText.charAt(cursorIndex)        
        let increaseCursorIndexAmount = 1

        //if the character is an operation, then add a space before and after it.
        if(/[*+-/]/.test(character)) {
            character = " ".concat(character).concat(" ")
            increaseCursorIndexAmount += 2
        }
        
        return state
                .update("currentLineText", (currentLineText) => {

                    //if replacing an operation, remove the spaces before and after the operation
                    //and decrease the amount of space the cursor increases by 1
                    if(/[-+*/]/.test(characterToBeReplaced)) {
                        increaseCursorIndexAmount--
                        return currentLineText.slice(0, cursorIndex-1) + character + currentLineText.slice(cursorIndex+2)                        
                    } else {
                        return currentLineText.slice(0, cursorIndex) + character + currentLineText.slice(cursorIndex+1)
                    }
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
    },
    [types.RESET_PREVIOUS_QUESTION]: (state, action) => {
        let { question } = action
        return state.set("currentLineText", question).set("cursorIndex", question.length)
    }
})

export default {
    currentLine: currentLineReducer
}