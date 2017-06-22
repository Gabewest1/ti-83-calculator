import actions from "./actions"

const handleButtonClick = actions.pressCalculatorButton
const toggleCalculatorPower = actions.toggleCalculatorPower
const toggleSecondMode = actions.toggleSecondMode
const toggleAlphaMode = actions.toggleAlphaMode
const decrementListNavigationIndex = actions.decrementListNavigationIndex
const increaseListNavigationIndex = actions.increaseListNavigationIndex

export default {
    handleButtonClick,
    toggleCalculatorPower,
    toggleSecondMode,   
    toggleAlphaMode,
    decrementListNavigationIndex,
    increaseListNavigationIndex,
}