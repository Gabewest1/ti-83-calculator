import types from "./types"

const addCharacterToScreen = (character) => ({ type: types.ADD_CHARACTER, character})
const clearLine = () => ({ type: types.CLEAR_LINE })
const moveCursorForwards = () => ({ type: types.MOVE_CURSOR_FORWARDS })
const moveCursorBackwards = () => ({ type: types.MOVE_CURSOR_BACKWARDS  })

export default {
    addCharacterToScreen,
    clearLine,
    moveCursorForwards,
    moveCursorBackwards,
}