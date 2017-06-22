import types from "./types"

const pressCalculatorButton = (button) => ({ type: types.BUTTON_PRESSED, button })
const clearCalculatorScreen = () => ({ type: types.CLEAR_SCREEN })
const startButtonClickAnimation = (button) => ({ type: types.BUTTON_CLICK_ANIMATION_STARTED, button })
const createStatement = (question, answer) => ({ type: types.CREATE_STATEMENT, question, answer })
const calculateAnswer = (answer) => ({ type: types.CALCULATE_ANSWER })
const saveAnswer = (answer) => ({ type: types.SAVE_ANSWER, answer })
const saveQuestion = (question) => ({ type: types.SAVE_QUESTION, question })
const toggleCalculatorPower = () => ({ type: types.TOGGLE_POWER })
const toggleSecondMode = () => ({ type: types.TOGGLE_SECOND_MODE })
const toggleAlphaMode = () => ({ type: types.TOGGLE_ALPHA_MODE })
const decrementPreviousQuestionIndex = () => ({ type: types.DECREMENT_PREVIOUS_QUESTION_INDEX })
const decrementListNavigationIndex = () => ({ type: types.DECREASE_LIST_TITLE_INDEX })
const increaseListNavigationIndex = () => ({ type: types.INCREASE_LIST_TITLE_INDEX })

export default {
    pressCalculatorButton,
    clearCalculatorScreen,
    startButtonClickAnimation,
    createStatement,
    saveAnswer,
    saveQuestion,
    toggleCalculatorPower,
    toggleSecondMode,
    toggleAlphaMode,
    decrementPreviousQuestionIndex,
    decrementListNavigationIndex,
    increaseListNavigationIndex,
}