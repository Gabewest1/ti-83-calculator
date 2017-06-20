import actions from "./actions"

const addCharacterToScreen = actions.addCharacterToScreen
const clearLine = actions.clearLine
const moveCursorForwards = actions.moveCursorForwards
const moveCursorBackwards = actions.moveCursorBackwards
const resetPreviousQuestion = actions.resetPreviousQuestion

export default {
    addCharacterToScreen,
    clearLine,
    moveCursorForwards,
    moveCursorBackwards,
    resetPreviousQuestion,
}