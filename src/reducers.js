//Import your reducers and add them to the rootReducer
import {default as calculator} from "./redux/Calculator"

const rootReducer = {
    ...calculator
}

export default rootReducer