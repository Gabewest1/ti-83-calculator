import { createSelector } from "reselect"

const selectCurrentLine = (state) => state.get("currentLineText")

const selectFormattedCurrentLine = createSelector(
    selectCurrentLine,
    (text) => {
        let formattedText = ""

        for(var prop in text) {
            let char = text[prop]

            if(char === "s") char += "in("
            if(char === "c") char += "os("
            if(char === "t") char += "an("

            if(/[-+*/]/.test(char)) {
                formattedText += " "+char+" "
            } else {
                formattedText += char
            }
        }
        return formattedText
    }
)

const selectCursorIndexNumber = (state) => state.get("cursorIndex")

const selectCursorIndex = createSelector(
    selectCurrentLine,
    selectCursorIndexNumber,
    (currentLineText, cursorIndex) => {
        let currentCharacter = currentLineText[cursorIndex]
        let numOfOperators = currentLineText
                                        .substring(0, cursorIndex+1)
                                        .split("")
                                        .filter(char => /[-+*/^]/.test(char))
                                        .length

        let numOfTrigOperations = currentLineText
                                        .substring(0, cursorIndex+1)
                                        .split("")
                                        .filter(char => /[sct]/.test(char))
                                        .length

        console.log("numOfTrigOperations", numOfTrigOperations)
        let numOfSpaces = numOfOperators*2 + numOfTrigOperations*3

        if(/[-+*/^]/.test(currentCharacter)) {
            numOfSpaces--
        } else if(/[sct]/.test(currentCharacter)) {
            numOfSpaces -= 3
        }

        return cursorIndex + numOfSpaces
    }
)

export default {
    selectCurrentLine,
    selectCursorIndex,
    selectFormattedCurrentLine,
    selectCursorIndexNumber,
}