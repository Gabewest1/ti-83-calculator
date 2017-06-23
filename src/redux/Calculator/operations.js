import actions from "./actions"

const handleButtonClick = actions.pressCalculatorButton
const toggleCalculatorPower = actions.toggleCalculatorPower
const toggleSecondMode = actions.toggleSecondMode
const toggleAlphaMode = actions.toggleAlphaMode
const decrementListNavigationIndex = actions.decrementListNavigationIndex
const increaseListNavigationIndex = actions.increaseListNavigationIndex
const decreaseTitleNavigationIndex = actions.decreaseTitleNavigationIndex
const increaseTitleNavigationIndex = actions.increaseTitleNavigationIndex

export default {
    handleButtonClick,
    toggleCalculatorPower,
    toggleSecondMode,   
    toggleAlphaMode,
    decrementListNavigationIndex,
    increaseListNavigationIndex,
    decreaseTitleNavigationIndex,
    increaseTitleNavigationIndex,
}