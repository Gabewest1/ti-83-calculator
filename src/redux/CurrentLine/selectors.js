import { createSelector } from "reselect"

const selectCurrentLine = (state) => state.get("currentLineText")
const selectCursorIndex = (state) => state.get("cursorIndex")

export default {
    selectCurrentLine,
    selectCursorIndex,
}