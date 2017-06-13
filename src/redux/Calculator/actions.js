import types from "./types"

const pressCalculatorButton = (button) => ({ type: types.BUTTON_PRESSED, button })
const appendCharacter = (character) => ({type: types.APPEND_CHARACTER, character})

export default {
    pressCalculatorButton,
    appendCharacter,
}