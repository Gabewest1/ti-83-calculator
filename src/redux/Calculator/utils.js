import math from "mathjs"

export const executeStatement = (statement) => {
    let value = math.eval(statement)

    if(isNaN(value)) {
        throw new Error("Statement is invalid: ", statement)
    } else {
        return value
    }
}