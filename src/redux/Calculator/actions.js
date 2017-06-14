import types from "./types"

const pressCalculatorButton = (button) => ({ type: types.BUTTON_PRESSED, button })
const addCharacterToScreen = (character) => ({ type: types.ADD_CHARACTER, character})
const clearCalculatorScreen = () => ({ type: types.CLEAR_SCREEN })
const startButtonClickAnimation = (button) => ({ type: types.BUTTON_CLICK_ANIMATION_STARTED, button })
const createNewLine = () => ({ type: types.CREATE_NEW_LINE })
const createStatement = (question, answer) => ({ type: types.CREATE_STATEMENT, question, answer })
const calculateAnswer = (answer) => ({ type: types.CALCULATE_ANSWER })
const saveAnswer = (answer) => ({ type: types.SAVE_ANSWER, answer })
const saveQuestion = (question) => ({ type: types.SAVE_QUESTION, question })
const clearLine = () => ({ type: types.CLEAR_LINE })

export default {
    pressCalculatorButton,
    addCharacterToScreen,
    clearCalculatorScreen,
    startButtonClickAnimation,
    createStatement,
    saveAnswer,
    saveQuestion,
    clearLine,
}