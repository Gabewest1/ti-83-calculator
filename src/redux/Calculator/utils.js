import math from "mathjs"

//mathjs log equation defaults to natural log so we
//need to wire that behaviour up to ln and need to find
//any instances of log and convert that to log10 to get
//the desired behaviour
math.import({
    ln: math.log
})

export const executeStatement = (statement) => {
    statement = statement.split("")
                         .map(char => (char === "\u207B") ? "-" : char)
                         .join("")
                         .replace(/log/g, "log10")
    let value = math.eval(statement)

    if(isNaN(value)) {
        throw new Error("Statement is invalid: ", statement)
    } else {
        return value
    }
}