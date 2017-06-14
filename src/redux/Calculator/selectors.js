import { createSelector } from "reselect"

const selectNumCharacters = (state) => state.get("question").length
const selectQuestion = (state) => state.get("question")
const selectPreviousQuestions = (state) => state.get("previousQuestions")
const selectPreviousAnswers = (state) => state.get("previousAnswers")
const selectStatements = createSelector(
    selectPreviousQuestions,
    selectPreviousAnswers,
    (questions, answers) => {
    let statements = []

    for(var i=0; i<questions.size; i++) {
        let question = questions.get(i)
        let answer = answers.get(i)

        statements.push({question, answer})
    }

    return statements
})

export default {
    selectNumCharacters,
    selectPreviousQuestions,
    selectPreviousAnswers,
    selectStatements,
    selectQuestion,
}