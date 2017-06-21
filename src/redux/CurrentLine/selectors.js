import { createSelector } from "reselect"

const selectCurrentLine = (state) => {
    let text = state.get("currentLineText")
    let formattedText = ""

    for(var prop in text) {
        let char = text[prop]
        if(/[-+*/]/.test(char)) {
            formattedText += " "+char+" "
        } else {
            formattedText += char
        }
    }
    return formattedText
}

const selectCursorIndexNumber = (state) => state.get("cursorIndex")

const selectCursorIndex = createSelector(
    selectCurrentLine,
    selectCursorIndexNumber,
    (currentLineText, cursorIndex) => {
        let currentCharacter = currentLineText.replace(/\s/g, "")[cursorIndex]
        let numOfOperators = currentLineText
                                        .replace(/\s/g,"")
                                        .substring(0, cursorIndex+1)
                                        .split("")
                                        .filter(char => /[-+*/]/.test(char))
                                        .length
        let numOfSpaces = numOfOperators*2
        if(/[-+*/]/.test(currentCharacter)) {
            numOfSpaces--
        }

        return cursorIndex + numOfSpaces
    }
)

export default {
    selectCurrentLine,
    selectCursorIndex,
}