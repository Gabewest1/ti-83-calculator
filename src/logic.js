import * as calculatorScreenLogic from "./redux/CalculatorScreen/logic"
import * as calculatorButtonLogic from "./redux/CalculatorButton/logic"

let logic = {
    ...calculatorButtonLogic,
    ...calculatorScreenLogic,
}

let arrLogic = []
for(var prop in logic) {
    arrLogic.push(logic[prop])
}

export default [ ...arrLogic ]