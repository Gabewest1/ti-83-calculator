import * as calculatorLogic from "./redux/Calculator/logic"

let logic = {
    ...calculatorLogic,
}

let arrLogic = []
for(var prop in logic) {
    arrLogic.push(logic[prop])
}

export default [ ...arrLogic ]