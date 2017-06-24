import math from "mathjs"

export const executeStatement = (statement) => {
    statement = statement.split("")
                         .map(char => (char === "\u207B") ? "-" : char)
                         .join("")
    let value = math.eval(statement)

    if(isNaN(value)) {
        throw new Error("Statement is invalid: ", statement)
    } else {
        return value
    }
}