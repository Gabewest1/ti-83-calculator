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
            if(char === "l") char += "og("
            if(char === "n") char = "ln("

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
        currentLineText = currentLineText.substring(0, cursorIndex+1).split("")
        
        let numOfOperators = currentLineText.filter(char => /[-+*/^]/.test(char)).length
        let numOfTrigOperations = currentLineText.filter(char => /[sct]/.test(char)).length
        let numOfLogs = currentLineText.filter(char => char === "l").length
        let numOfNaturalLogs = currentLineText.filter(char => char === "n").length

        console.log("numOfTrigOperations", numOfTrigOperations)
        let numOfSpaces = numOfOperators*2 + numOfTrigOperations*3 + numOfLogs*3 + numOfNaturalLogs*2

        if(/[-+*/^]/.test(currentCharacter)) {
            numOfSpaces--
        } else if(currentCharacter === "n") {
            numOfSpaces -= 2
        } else if(/[sctl]/.test(currentCharacter)) {
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