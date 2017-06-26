import math from "mathjs"

const NEGATIVE_SIGN = "\u207B"
const SQUARE_ROOT_SIGN = "\u00B2"

//mathjs log equation defaults to natural log so we
//need to wire that behaviour up to ln and need to find
//any instances of log and convert that to log10 to get
//the desired behaviour
math.import({
    ln: math.log,
})

            // (char === SQUARE_ROOT_SIGN) ? `* ${getPreviousNumber(arr, i)}` : char
export const executeStatement = (statement) => {
    statement = statement.split("")
                         .map((char, i, arr) => (char === NEGATIVE_SIGN) ? "-" : char)
                         .join("")
                         .replace(/log/g, "log10")

    while(statement.includes(SQUARE_ROOT_SIGN)) {
        let [i, prevNum, newNum] = findAndCalculateNextSquareRoot(statement)
        statement = statement.replace(prevNum+SQUARE_ROOT_SIGN, newNum)
        console.log("DATA:", i, prevNum, newNum, statement)
    }
    let value = math.eval(statement)

    if(isNaN(value)) {
        throw new Error("Statement is invalid: ", statement)
    } else {
        return value
    }
}

function findAndCalculateNextSquareRoot(statement) {
    let arr = []
    for(var i=0; i< statement.length; i++) {
        let char = statement[i]
        if(char === SQUARE_ROOT_SIGN) {
            let prevNum = getPreviousNumber(statement.split(""), i)
            let newNum = "("+prevNum+"*"+prevNum+")"
            return [i, prevNum, newNum]
        }
    }

    return  arr
}
function getPreviousNumber(numbers, start) {
    let stoppingPoints = /[-+*/^()\s]/
    let rightParenthesis = 0
    let startedWithParenthesis = numbers[start]-1 === ")"

    for(var i=start; i>=0; i--) {
        let char = numbers[i]

        if(startedWithParenthesis) {
            if(stoppingPoints.test(char)) {
                if(rightParenthesis === 0) {
                    return numbers.slice(i+1, start).join("")
                } else if(char === "(") {
                    rightParenthesis--
                }
            } else if(char === ")") {
                rightParenthesis++
            }
        } else {
            if(stoppingPoints.test(char)) {
                return numbers.slice(i+1, start).join("")
            }
        }
    }

    return numbers.slice(0, start).join("")
}

function replaceNumber(numbers, index, value) {
    let length = value.length
    return numbers.slice(0, index).concat(value)
}