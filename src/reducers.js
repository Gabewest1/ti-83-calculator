//Import your reducers and add them to the rootReducer
import {default as calculator} from "./redux/Calculator"
import {default as currentLine} from "./redux/CurrentLine"

const rootReducer = {
    ...calculator,
    ...currentLine,
}

export default rootReducer