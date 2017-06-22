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
const selectAllScreenData = (state) => state.calculatorScreens
const selectCurrentPath = (state) => state.router.location.pathname
const selectCurrentScreenData = createSelector(
    selectCurrentPath,
    selectAllScreenData,
    (path, screenData) => {
        console.log(path, screenData)
        let currentScreen = path.substr(1)
        return screenData.find(screen => screen.get("screen") === currentScreen)
    }
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
    selectAllScreenData,
    selectCurrentPath,
    selectCurrentScreenData,
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