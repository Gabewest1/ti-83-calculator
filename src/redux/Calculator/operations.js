import actions from "./actions"

const handleButtonClick = actions.pressCalculatorButton
const toggleCalculatorPower = actions.toggleCalculatorPower
const toggleSecondMode = actions.toggleSecondMode
const toggleAlphaMode = actions.toggleAlphaMode
const decreaseListNavigationIndex = actions.decreaseListNavigationIndex
const increaseListNavigationIndex = actions.increaseListNavigationIndex
const decreaseTitleNavigationIndex = actions.decreaseTitleNavigationIndex
const increaseTitleNavigationIndex = actions.increaseTitleNavigationIndex
const resetItemNavigationIndex = actions.resetItemNavigationIndex
const resetTitleNavigationIndex = actions.resetTitleNavigationIndex
const setScreen = actions.setScreen

export default {
    handleButtonClick,
    toggleCalculatorPower,
    toggleSecondMode,   
    toggleAlphaMode,
    decreaseListNavigationIndex,
    increaseListNavigationIndex,
    decreaseTitleNavigationIndex,
    increaseTitleNavigationIndex,
    resetItemNavigationIndex,
    resetTitleNavigationIndex,
    setScreen,
}