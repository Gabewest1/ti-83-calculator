import { createSelector } from "reselect"

const selectNumCharacters = (state) => state.get("question").length
const selectQuestion = (state) => state.get("question")
const selectPreviousQuestions = (state) => state.get("previousQuestions")
const selectPreviousAnswers = (state) => state.get("previousAnswers")
const selectStatements = (state) => state.get("statements")
const selectPowerStatus = (state) => state.get("isPowerOn")
const selectSecondModeStatus = (state) => state.get("secondMode")
const selectAlphaModeStatus = (state) => state.get("alphaMode")
const selectNumPreviousQuestions = (state) => state.get("previousQuestions").size
const selectPreviousQuestionIndex = (state) => state.get("previousQuestionIndex")
const selectCurrentTitleIndex = (state) => state.get("currentTitleIndex")
const selectCurrentItemIndex = (state) => state.get("currentItemIndex")
const selectAllScreens = (state) => state.get("screens")
const selectCurrentScreenName = (state) => state.get("currentScreen")
const selectCurrentScreen = createSelector(
    selectAllScreens,
    selectCurrentScreenName,
    (allScreens, currentScreen) => {
        console.log(currentScreen, allScreens)
        return allScreens.find(screen => screen.get("screen") === currentScreen)
    }
)
const selectCurrentScreenData = createSelector(
    selectCurrentScreen,
    (currentScreen) => currentScreen.get("data")
)
const selectNumScreenTitles = createSelector(
    selectCurrentScreenData,
    (data) => data.size
)
const selectNumScreenItems = createSelector(
    selectCurrentTitleIndex,
    selectCurrentScreenData,
    (currentIndex, data) => data.get(currentIndex).get("items").size
)

export default {
    selectNumCharacters,
    selectPreviousQuestions,
    selectPreviousAnswers,
    selectStatements,
    selectQuestion,
    selectPowerStatus,
    selectSecondModeStatus,
    selectAlphaModeStatus,
    selectNumPreviousQuestions,
    selectPreviousQuestionIndex,
    selectAllScreens,
    selectCurrentScreenName,
    selectCurrentScreen,
    selectCurrentScreenData,
    selectNumScreenTitles,
    selectNumScreenItems,
    selectCurrentTitleIndex,
    selectCurrentItemIndex,
}
// const selectStatements = createSelector(
//     selectPreviousQuestions,
//     selectPreviousAnswers,
//     (questions, answers) => {
//     let statements = []

//     for(var i=0; i<questions.size; i++) {
//         let question = questions.get(i)
//         let answer = answers.get(i)

//         statements.push({question, answer})
//     }

//     return statements
// })