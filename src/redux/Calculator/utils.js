export const handleEnterButton = ({getState, action}) => {
    
}
export const executeStatement = (statement) => {
    let value = eval(statement)

    if(isNaN(value)) {
        throw new Error("Statement is invalid: ", statement)
    } else {
        return value
    }
}